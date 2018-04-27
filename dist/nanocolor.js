(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("nanocolor", [], factory);
	else if(typeof exports === 'object')
		exports["nanocolor"] = factory();
	else
		root["nanocolor"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _transforms = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var colorRegex = /^#([A-Fa-f\d]{3}|[A-Fa-f\d]{6})$/;

function isValid(hex) {
    return colorRegex.test(hex);
}

function processChannel(channel, sign) {
    var factor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;

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

var Nanocolor = function () {
    function Nanocolor() {
        var hexOrInstance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        _classCallCheck(this, Nanocolor);

        if (hexOrInstance instanceof Nanocolor) {
            this._hsl = Object.assign({}, hexOrInstance._hsl);
        } else {
            if (!isValid(hexOrInstance)) {
                hexOrInstance = '#000';
            }
            this._hsl = (0, _transforms.rgb2hsl)((0, _transforms.hex2rgb)(hexOrInstance));
        }
    }

    _createClass(Nanocolor, [{
        key: 'grayscale',
        value: function grayscale() {
            this._hsl.s = 0;
            return this;
        }
    }, {
        key: 'invert',
        value: function invert() {
            var rgb = (0, _transforms.hsl2rgb)(this._hsl);
            rgb.r = 255 - rgb.r;
            rgb.g = 255 - rgb.g;
            rgb.b = 255 - rgb.b;
            this._hsl = (0, _transforms.rgb2hsl)(rgb);
            return this;
        }
    }, {
        key: 'darken',
        value: function darken(factor) {
            return processChannel.call(this, 'l', -1, factor);
        }
    }, {
        key: 'lighten',
        value: function lighten(factor) {
            return processChannel.call(this, 'l', 1, factor);
        }
    }, {
        key: 'saturate',
        value: function saturate(factor) {
            return processChannel.call(this, 's', 1, factor);
        }
    }, {
        key: 'desaturate',
        value: function desaturate(factor) {
            return processChannel.call(this, 's', -1, factor);
        }
    }, {
        key: 'shift',
        value: function shift(amount) {
            this._hsl.h = (this._hsl.h + amount) % 360;
            if (this._hsl.h < 0) {
                this._hsl.h += 360;
            }
            return this;
        }
    }, {
        key: 'isDark',
        value: function isDark() {
            return this._hsl.l < 50;
        }
    }, {
        key: 'isLight',
        value: function isLight() {
            return !this.isDark();
        }
    }, {
        key: 'getHSL',
        value: function getHSL() {
            var hsl = this._hsl;
            return { h: Math.round(hsl.h), s: Math.round(hsl.s), l: Math.round(hsl.l) };
        }
    }, {
        key: 'getRGB',
        value: function getRGB() {
            var rgb = (0, _transforms.hsl2rgb)(this._hsl);
            return { r: Math.round(rgb.r), g: Math.round(rgb.g), b: Math.round(rgb.b) };
        }
    }, {
        key: 'equals',
        value: function equals(other) {
            if (typeof other === 'string') {
                other = new Nanocolor(other);
            }
            if (other instanceof Nanocolor) {
                return this.toString() === other.toString();
            }
            return false;
        }
    }, {
        key: 'compare',
        value: function compare(other) {
            other = toNanocolor(other);
            if (this.equals(other)) {
                return 0;
            }
            var makeComparable = function makeComparable(hsl) {
                return hsl.h * 1e6 + hsl.l * 1e3 + hsl.s;
            };
            return Math.sign(makeComparable(this.getHSL()) - makeComparable(other.getHSL()));
        }
    }, {
        key: 'clone',
        value: function clone() {
            return new Nanocolor(this.toString());
        }
    }, {
        key: 'toString',
        value: function toString() {
            return (0, _transforms.rgb2hex)(this.getRGB());
        }
    }, {
        key: 'valueOf',
        value: function valueOf() {
            return this.toString();
        }
    }]);

    return Nanocolor;
}();

function factory(hex) {
    return new Nanocolor(hex);
}

factory.random = function () {
    var hue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (hue === null) {
        var randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return new Nanocolor(randomHex);
    }

    var randomChannel = function randomChannel() {
        return Math.floor(Math.random() * 101);
    };
    var color = new Nanocolor();
    color._hsl = {
        h: Math.min(360, Math.max(0, hue)),
        s: randomChannel(),
        l: randomChannel()
    };
    return color;
};

factory.gradient = function (from, to) {
    var steps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

    from = toNanocolor(from);
    to = toNanocolor(to);
    steps = Math.max(2, steps);

    var stepsPerChannel = {
        h: (to._hsl.h - from._hsl.h) / steps,
        s: (to._hsl.s - from._hsl.s) / steps,
        l: (to._hsl.l - from._hsl.l) / steps
    };

    var result = [from];
    var getChannelValue = function getChannelValue(channel, i) {
        return from._hsl[channel] + Math.round(i * stepsPerChannel[channel]);
    };

    for (var i = 1; i < steps - 1; ++i) {
        var entry = from.clone();
        entry._hsl.h = getChannelValue('h', i);
        entry._hsl.s = getChannelValue('s', i);
        entry._hsl.l = getChannelValue('l', i);
        result.push(entry);
    }

    result.push(to);
    return result;
};

factory.sort = function (array) {
    array = array.map(toNanocolor);
    return array.sort(function (a, b) {
        return a.compare(b);
    });
};

factory.isValid = isValid;

exports.default = factory;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rgb2hsl = rgb2hsl;
exports.hsl2rgb = hsl2rgb;
exports.hex2rgb = hex2rgb;
exports.rgb2hex = rgb2hex;
function rgb2hsl(rgb) {
    var r = rgb.r / 255;
    var g = rgb.g / 255;
    var b = rgb.b / 255;

    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var h = void 0,
        s = void 0;
    var l = (min + max) / 2;

    if (min === max) {
        h = s = 0;
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (min + max);

        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);break;
            case g:
                h = (b - r) / d + 2;break;
            case b:
                h = (r - g) / d + 4;break;
        }
        h /= 6;
    }
    return { h: h * 360, s: s * 100, l: l * 100 };
}

function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    } else if (t > 1) {
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

function hsl2rgb(hsl) {
    var r = void 0,
        g = void 0,
        b = void 0;
    var h = hsl.h / 360;
    var s = hsl.s / 100;
    var l = hsl.l / 100;
    if (hsl.s === 0) {
        r = g = b = l;
    } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}

function hex2rgb(hex) {
    var color = hex.substr(1);
    if (color.length === 3) {
        color = color.split('').map(function (p) {
            return p + p;
        }).join('');
    }
    color = parseInt(color, 16);
    return { r: color >> 16 & 0xff, g: color >> 8 & 0xff, b: color & 0xff };
}

function rgb2hex(rgb) {
    var color = Math.floor((rgb.r << 16) + (rgb.g << 8) + rgb.b);
    return '#' + color.toString(16).padStart(6, '0');
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=nanocolor.js.map