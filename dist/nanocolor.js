(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("nanocolor", [], factory);
	else if(typeof exports === 'object')
		exports["nanocolor"] = factory();
	else
		root["nanocolor"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./transforms */ "./src/transforms.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _transforms) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var colorRegex = /^#([A-Fa-f\d]{3}|[A-Fa-f\d]{6})$/;

  function isValid(hex) {
    return colorRegex.test(hex);
  }

  function isDefined(value) {
    return typeof value !== 'undefined';
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

  function toPerceivedGrayscale(rgb) {
    var gray = Math.round(0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b);
    return (0, _transforms.rgb2hsl)({
      r: gray,
      g: gray,
      b: gray
    });
  }

  function toNanocolor(value) {
    return value instanceof Nanocolor ? value : new Nanocolor(value); // eslint-disable-line
  }

  var Nanocolor =
  /*#__PURE__*/
  function () {
    function Nanocolor(hexOrInstanceOrR, g, b) {
      _classCallCheck(this, Nanocolor);

      if (hexOrInstanceOrR instanceof Nanocolor) {
        this._hsl = _objectSpread({}, hexOrInstanceOrR._hsl);
      } else if (isDefined(hexOrInstanceOrR) && isDefined(g) && isDefined(b)) {
        var rgb = {
          r: hexOrInstanceOrR,
          g: g,
          b: b
        };
        this._hsl = (0, _transforms.rgb2hsl)(rgb);
      } else {
        if (!isValid(hexOrInstanceOrR)) {
          hexOrInstanceOrR = '#000';
        }

        this._hsl = (0, _transforms.rgb2hsl)((0, _transforms.hex2rgb)(hexOrInstanceOrR));
      }
    }

    _createClass(Nanocolor, [{
      key: "grayscale",
      value: function grayscale() {
        var perceived = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        if (perceived) {
          this._hsl = toPerceivedGrayscale(this.rgb);
        } else {
          this._hsl.s = 0;
        }

        return this;
      }
    }, {
      key: "invert",
      value: function invert() {
        var rgb = (0, _transforms.hsl2rgb)(this._hsl);
        rgb.r = 255 - rgb.r;
        rgb.g = 255 - rgb.g;
        rgb.b = 255 - rgb.b;
        this._hsl = (0, _transforms.rgb2hsl)(rgb);
        return this;
      }
    }, {
      key: "darken",
      value: function darken(factor) {
        return processChannel.call(this, 'l', -1, factor);
      }
    }, {
      key: "lighten",
      value: function lighten(factor) {
        return processChannel.call(this, 'l', 1, factor);
      }
    }, {
      key: "saturate",
      value: function saturate(factor) {
        return processChannel.call(this, 's', 1, factor);
      }
    }, {
      key: "desaturate",
      value: function desaturate(factor) {
        return processChannel.call(this, 's', -1, factor);
      }
    }, {
      key: "shift",
      value: function shift(amount) {
        this._hsl.h = (this._hsl.h + amount) % 360;

        if (this._hsl.h < 0) {
          this._hsl.h += 360;
        }

        return this;
      }
    }, {
      key: "mix",
      value: function mix(otherColor) {
        var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
        var otherRGB = new Nanocolor(otherColor).rgb;
        var thisRGB = this.rgb;

        var mix = function mix(a, b) {
          return Math.round(a * opacity / 100 + b * (100 - opacity) / 100);
        };

        this._hsl = (0, _transforms.rgb2hsl)({
          r: mix(otherRGB.r, thisRGB.r),
          g: mix(otherRGB.g, thisRGB.g),
          b: mix(otherRGB.b, thisRGB.b)
        });
        return this;
      }
    }, {
      key: "format",
      value: function format() {
        var opacity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        var rgb = this.rgb;

        if (isDefined(opacity)) {
          return "rgba(".concat(rgb.r, ", ").concat(rgb.g, ", ").concat(rgb.b, ", ").concat(opacity, ")");
        }

        return "rgb(".concat(rgb.r, ", ").concat(rgb.g, ", ").concat(rgb.b, ")");
      }
    }, {
      key: "equals",
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
      key: "compare",
      value: function compare(other) {
        other = toNanocolor(other);

        if (this.equals(other)) {
          return 0;
        }

        var makeComparable = function makeComparable(hsl) {
          return hsl.h * 1e6 + hsl.l * 1e3 + hsl.s;
        };

        var compared = makeComparable(this.hsl) - makeComparable(other.hsl);
        return compared === 0 ? 0 : compared < 0 ? -1 : 1; // eslint-disable-line
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Nanocolor(this.hex);
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.hex;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.toString();
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        return this.hex;
      }
    }, {
      key: "isDark",
      get: function get() {
        return toPerceivedGrayscale(this.rgb).l < 50;
      }
    }, {
      key: "isLight",
      get: function get() {
        return !this.isDark;
      }
    }, {
      key: "hsl",
      get: function get() {
        var hsl = this._hsl;
        return {
          h: Math.round(hsl.h),
          s: Math.round(hsl.s),
          l: Math.round(hsl.l)
        };
      }
    }, {
      key: "rgb",
      get: function get() {
        var rgb = (0, _transforms.hsl2rgb)(this._hsl);
        return {
          r: Math.round(rgb.r),
          g: Math.round(rgb.g),
          b: Math.round(rgb.b)
        };
      }
    }, {
      key: "hex",
      get: function get() {
        return (0, _transforms.rgb2hex)(this.rgb);
      }
    }]);

    return Nanocolor;
  }();

  function factory() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Nanocolor, args);
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
  var _default = factory;
  _exports.default = _default;
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/transforms.js":
/*!***************************!*\
  !*** ./src/transforms.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.rgb2hsl = rgb2hsl;
  _exports.hsl2rgb = hsl2rgb;
  _exports.hex2rgb = hex2rgb;
  _exports.rgb2hex = rgb2hex;

  function rgb2hsl(rgb) {
    var r = rgb.r / 255;
    var g = rgb.g / 255;
    var b = rgb.b / 255;
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var h, s;
    var l = (min + max) / 2;

    if (min === max) {
      h = s = 0;
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (min + max);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;

        case g:
          h = (b - r) / d + 2;
          break;

        case b:
          h = (r - g) / d + 4;
          break;
      }

      h /= 6;
    }

    return {
      h: h * 360,
      s: s * 100,
      l: l * 100
    };
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
    var r, g, b;
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

    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    };
  }

  function hex2rgb(hex) {
    var color = hex.substr(1);

    if (color.length === 3) {
      color = color.split('').map(function (p) {
        return p + p;
      }).join('');
    }

    color = parseInt(color, 16);
    return {
      r: color >> 16 & 0xff,
      g: color >> 8 & 0xff,
      b: color & 0xff
    };
  }

  function rgb2hex(rgb) {
    var color = Math.floor((rgb.r << 16) + (rgb.g << 8) + rgb.b);
    return '#' + ('000000' + color.toString(16)).slice(-6);
  }
});

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Simon\Code\_opensource\nanocolor-hsl\src\index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=nanocolor.js.map