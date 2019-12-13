export function rgb2hsl(rgb) {
    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;

    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    let h, s;
    const l = (min + max) / 2;

    if (min === max) {
        h = s = 0;
    }
    else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (min + max);

        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h * 360, s: s * 100, l: l * 100 };
}

function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    else if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}

export function hsl2rgb(hsl) {
    let r, g, b;
    const h = hsl.h / 360;
    const s = hsl.s / 100;
    const l = hsl.l / 100;
    if (hsl.s === 0) {
        r = g = b = l;
    }
    else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + (1 / 3));
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - (1 / 3));
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}

export function hex2rgb(hex) {
    let color = hex.substr(1);
    if (color.length === 3) {
        color = color.split('').map(p => p + p).join('');
    }
    color = parseInt(color, 16);
    return { r: color >> 16 & 0xff, g: color >> 8 & 0xff, b: color & 0xff };
}

export function rgb2hex(rgb) {
    const color = Math.floor((rgb.r << 16) + (rgb.g << 8) + rgb.b);
    return '#' + ('000000' + color.toString(16)).slice(-6);
}