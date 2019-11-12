import { rgb2hsl, hsl2rgb, hex2rgb, rgb2hex } from '@/transforms';

const colorRegex = /^#([A-Fa-f\d]{3}|[A-Fa-f\d]{6})$/;

function isValid(hex) {
    return colorRegex.test(hex);
}

function isDefined(value) {
    return typeof value !== 'undefined';
}

function processChannel(channel, sign, factor = 30) {
    factor = Math.max(0, Math.min(100, factor));
    if (factor === 0) {
        return this;
    }
    this._hsl[channel] = Math.min(100, this._hsl[channel] * (1 + sign * factor / 100));
    return this;
}

function toNanocolor(value) {
    return value instanceof Nanocolor ? value : new Nanocolor(value); // eslint-disable-line
}


class Nanocolor {
    constructor(hexOrInstanceOrR, g, b) {
        if (hexOrInstanceOrR instanceof Nanocolor) {
            this._hsl = Object.assign({ }, hexOrInstanceOrR._hsl);
        }
        else if (isDefined(hexOrInstanceOrR) && isDefined(g) && isDefined(b)) {
            const rgb = { r: hexOrInstanceOrR, g, b };
            this._hsl = rgb2hsl(rgb);
        }
        else {
            if (!isValid(hexOrInstanceOrR)) {
                hexOrInstanceOrR = '#000';
            }
            this._hsl = rgb2hsl(hex2rgb(hexOrInstanceOrR));
        }
    }

    grayscale(perceived = true) {
        if (perceived) {
            const rgb = this.rgb;
            const gray = Math.round(0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b);
            this._hsl = rgb2hsl({ r: gray, g: gray, b: gray });
        }
        else {
            this._hsl.s = 0;
        }
        return this;
    }

    invert() {
        const rgb = hsl2rgb(this._hsl);
        rgb.r = 255 - rgb.r;
        rgb.g = 255 - rgb.g;
        rgb.b = 255 - rgb.b;
        this._hsl = rgb2hsl(rgb);
        return this;
    }

    darken(factor) {
        return processChannel.call(this, 'l', -1, factor);
    }

    lighten(factor) {
        return processChannel.call(this, 'l', 1, factor);
    }

    saturate(factor) {
        return processChannel.call(this, 's', 1, factor);
    }

    desaturate(factor) {
        return processChannel.call(this, 's', -1, factor);
    }

    shift(amount) {
        this._hsl.h = (this._hsl.h + amount) % 360;
        if (this._hsl.h < 0) {
            this._hsl.h += 360;
        }
        return this;
    }

    mix(otherColor, opacity = 50) {
        const otherRGB = new Nanocolor(otherColor).rgb;
        const thisRGB = this.rgb;
        const mix = (a, b) => Math.round(a * opacity / 100 + b * (100 - opacity) / 100);
        this._hsl = rgb2hsl({
            r: mix(otherRGB.r, thisRGB.r),
            g: mix(otherRGB.g, thisRGB.g),
            b: mix(otherRGB.b, thisRGB.b)
        });
        return this;
    }

    get isDark() {
        return this.grayscale()._hsl.l < 40;
    }

    get isLight() {
        return !this.isDark;
    }

    get hsl() {
        const hsl = this._hsl;
        return { h: Math.round(hsl.h), s: Math.round(hsl.s), l: Math.round(hsl.l) };
    }

    get rgb() {
        const rgb = hsl2rgb(this._hsl);
        return { r: Math.round(rgb.r), g: Math.round(rgb.g), b: Math.round(rgb.b) };
    }

    get hex() {
        return rgb2hex(this.rgb);
    }

    format(opacity = undefined) {
        const rgb = this.rgb;
        if (isDefined(opacity)) {
            return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
        }
        return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    }

    equals(other) {
        if (typeof other === 'string') {
            other = new Nanocolor(other);
        }
        if (other instanceof Nanocolor) {
            return this.toString() === other.toString();
        }
        return false;
    }

    compare(other) {
        other = toNanocolor(other);
        if (this.equals(other)) {
            return 0;
        }
        const makeComparable = hsl => hsl.h * 1e6 + hsl.l * 1e3 + hsl.s;
        return Math.sign(makeComparable(this.hsl) - makeComparable(other.hsl));
    }

    clone() {
        return new Nanocolor(this.hex);
    }

    toString() {
        return this.hex;
    }

    toJSON() {
        return this.toString();
    }

    valueOf() {
        return this.hex;
    }
}

function factory(...args) {
    return new Nanocolor(...args);
}

factory.random = function(hue = null){
    if (hue === null) {
        const randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return new Nanocolor(randomHex);
    }

    const randomChannel = () => Math.floor(Math.random() * 101);
    const color = new Nanocolor();
    color._hsl = {
        h: Math.min(360, Math.max(0, hue)),
        s: randomChannel(),
        l: randomChannel()
    };
    return color;
};

factory.gradient = function(from, to, steps = 2){
    from = toNanocolor(from);
    to = toNanocolor(to);
    steps = Math.max(2, steps);
    
    const stepsPerChannel = {
        h: (to._hsl.h - from._hsl.h) / steps,
        s: (to._hsl.s - from._hsl.s) / steps,
        l: (to._hsl.l - from._hsl.l) / steps
    };

    const result = [from];
    const getChannelValue = (channel, i) => from._hsl[channel] + Math.round(i * stepsPerChannel[channel]);

    for (let i = 1; i < steps - 1; ++i) {
        const entry = from.clone();
        entry._hsl.h = getChannelValue('h', i);
        entry._hsl.s = getChannelValue('s', i);
        entry._hsl.l = getChannelValue('l', i);
        result.push(entry);
    }

    result.push(to);
    return result;
};

factory.sort = function(array){
    array = array.map(toNanocolor);
    return array.sort((a, b) => a.compare(b));
};

factory.isValid = isValid;

export default factory;