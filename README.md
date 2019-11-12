# nanocolor

**Minimalistic and tiny color manipulation library**

Dependency-free. Only 4.8KB (1.9KB gzipped). Internally works with HSL colors. Inspired by various other color libraries.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [API](#api)


## Installation

Install `nanocolor` via npm:

```bash
npm install --save nanocolor-hsl
```

Then import it in your project:

```javascript
import nanocolor from 'nanocolor-hsl';
```

Or include the files via `<script>` tag:
```html
<script src="node_modules/nanocolor/dist/nanocolor.min.js"></script>
```


## Usage

```javascript
const color = nanocolor('#ff9900').lighten(50).shift(150).desaturate().hex;
console.log(color); // -> #93e3ec
```

Also check the demo in the `demo` directory.


## API

### Constructor

The `nanocolor` constructor can be called with hex color strings, RGB values or nanocolor instances:
* `nanocolor('#112233')` or
* `nanocolor('#123')` or
* `nanocolor(17, 34, 51)` or
* `nanocolor(instance)`

### Instance Fields and Methods

#### Computed Fields
* `instance.isDark`: Returns a boolean whether or not the color is considered dark.
* `instance.isLight`: Returns a boolean whether or not the color is considered light.
* `instance.hex`: Returns a hex color string representing the color, e.g. `#112233`.
* `instance.hsl`: Returns an object with the color's channels in the HSL space, e.g. `{ h: 100, s: 50, l: 25 }`.
* `instance.rgb`: Returns an object with the color's channels in the RGB space, e.g. `{ r: 255, g: 100, b: 0 }`.

#### Chainable Methods
These methods can be chained (i.e. they return the nanocolor instance). For example: `instance.lighten().saturate()`
* `instance.grayscale()`: Transforms the color to grayscale.
* `instance.invert()`: Inverts the color.
* `instance.darken(factor = 30)`: Darkens the color. Factor is optional (0 <= `factor` <= 100).
* `instance.lighten(factor = 30)`: Lightens the color. Factor is optional (0 <= `factor` <= 100).
* `instance.saturate(factor = 30)`: Saturates the color. Factor is optional (0 <= `factor` <= 100).
* `instance.desaturate(factor = 30)`: Desaturates the color. Factor is optional (0 <= `factor` <= 100).
* `instance.shift(amount)`: Shifts the HSL hue of the color by the given amount, e.g. from red to green. Amount is an integer usually in the range -360 <= `amount` <= 360.
* `instance.mix(color, opacity = 50)`: Mixes the current color with the given color. The new color is applied with the given opacity i.e. percentage (0 <= `opacity` <= 100).

#### Other Methods
* `instance.equals(color)`: Returns a boolean whether or not the color equals the given `color`. `color` can be a hex color string or a `nanocolor` instance.
* `instance.compare(color)`: Compares the given `color` (hex string or nanocolor instance) to the current `instance`. Returns `0` if the colors are equal, and `-1` or `1` otherwise. Hue is compared first, then lightness, and then saturation. Also see `nanocolor.sort(array)`.
* `instance.clone()`: Returns a clone of the current `instance`.
* `instance.format(opacity)`: Returns a string representation for CSS, e.g. `rgb(1, 2, 3)` or, when opacity is given, `rgba(1, 2, 3, 0.42)`.

### Static Methods

* `nanocolor.isValid(colorString)`: Checks if the given `colorString` is a valid hex color string.
* `nanocolor.random()`: Returns a completely random color.
* `nanocolor.random(hue)`: Returns a random color with the given HSL hue (0 <= `hue` <= 360), e.g. variations of green or red.
* `nanocolor.gradient(from, to, steps)`: Creates a gradient between the two colors `from` and `to` (hex strings or nanocolor instances). `steps` specifies how many color steps the gradient should have (`steps` >= 2). Returns an array of nanocolor instances.
* `nanocolor.sort(array)`: Returns an array of sorted nanocolor instances based on the given `array`. Sorting is done by comparing hue first, then lightness, and then saturation.