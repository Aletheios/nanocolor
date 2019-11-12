import nanocolor from '@/index';

describe('nanocolor', () => {

    it('should create nanocolor instances', () => {
        expect(nanocolor('#112233').hex).toEqual('#112233');
        expect(nanocolor(17, 34, 51).hex).toEqual('#112233');
        expect(nanocolor(nanocolor('#112233')).hex).toEqual('#112233');
    });

    describe('(chainable methods)', () => {
        it('should convert a color to grayscale', () => {
            expect(nanocolor('#ff9900').grayscale().hex).toEqual('#a6a6a6');
            expect(nanocolor('#f00').grayscale().hex).toEqual('#4c4c4c');
            expect(nanocolor('#123456').grayscale().hex).toEqual('#2e2e2e');
            expect(nanocolor('#fff').grayscale().hex).toEqual('#ffffff');

            expect(nanocolor('#ff9900').grayscale(false).hex).toEqual('#808080');
            expect(nanocolor('#f00').grayscale(false).hex).toEqual('#808080');
            expect(nanocolor('#123456').grayscale(false).hex).toEqual('#343434');
            expect(nanocolor('#fff').grayscale(false).hex).toEqual('#ffffff');
        });

        it('should invert a color', () => {
            expect(nanocolor('#ff9900').invert().hex).toEqual('#0066ff');
            expect(nanocolor('#f00').invert().hex).toEqual('#00ffff');

            expect(nanocolor('#000').invert().hex).toEqual('#ffffff');
            expect(nanocolor('#fff').invert().hex).toEqual('#000000');
            expect(nanocolor('#808080').invert().hex).toEqual('#7f7f7f');
        });

        it('should darken a color', () => {
            expect(nanocolor('#ff9900').darken().hex).toEqual('#b36b00');
            expect(nanocolor('#c00').darken().hex).toEqual('#8f0000');

            expect(nanocolor('#ff9900').darken(50).hex).toEqual('#804d00');
            expect(nanocolor('#c00').darken(100).hex).toEqual('#000000');

            expect(nanocolor('#000').darken().hex).toEqual('#000000');
            expect(nanocolor('#fff').darken().hex).toEqual('#b3b3b3');
        });

        it('should lighten a color', () => {
            expect(nanocolor('#ff9900').lighten().hex).toEqual('#ffb84d');
            expect(nanocolor('#c00').lighten().hex).toEqual('#ff0a0a');

            expect(nanocolor('#ff9900').lighten(50).hex).toEqual('#ffcc80');
            expect(nanocolor('#c00').lighten(100).hex).toEqual('#ff9999');

            expect(nanocolor('#000').lighten().hex).toEqual('#000000'); // should probably overthink this behavior...
            expect(nanocolor('#fff').lighten().hex).toEqual('#ffffff');
        });

        it('should saturate a color', () => {
            expect(nanocolor('#cc2211').saturate().hex).toEqual('#dd1400');
            expect(nanocolor('#cc2211').saturate(50).hex).toEqual('#dd1400');

            expect(nanocolor('#ff9900').saturate().hex).toEqual('#ff9900');
            expect(nanocolor('#808080').saturate().hex).toEqual('#808080');
        });

        it('should desaturate a color', () => {
            expect(nanocolor('#cc2211').desaturate().hex).toEqual('#b0392d');
            expect(nanocolor('#cc2211').desaturate(50).hex).toEqual('#9d4840');

            expect(nanocolor('#ff9900').desaturate().hex).toEqual('#d99126');
            expect(nanocolor('#808080').desaturate().hex).toEqual('#808080');
        });

        it('should shift the hue of a color', () => {
            expect(nanocolor('#f00').shift(100).hex).toEqual('#55ff00');
            expect(nanocolor('#f00').shift(100).hsl.h).toEqual(100);
            
            expect(nanocolor('#f00').shift(-100).hex).toEqual('#5500ff');
            expect(nanocolor('#f00').shift(-100).hsl.h).toEqual(260);

            expect(nanocolor('#f00').shift(360).hex).toEqual('#ff0000');
            expect(nanocolor('#f00').shift(460).hex).toEqual('#55ff00');
        });

        it('should mix two colors', () => {
            expect(nanocolor('#ff9900').mix('#ff0000').hex).toEqual('#ff4d00');
            expect(nanocolor('#000').mix('#fff').hex).toEqual('#808080');
            expect(nanocolor('#000').mix('#fff', 25).hex).toEqual('#404040');
        });

        it('should chain functions', () => {
            expect(nanocolor('#ff9900').lighten(50).shift(150).desaturate().hex).toEqual('#93e3ec');
        });
    });


    describe('(instance methods)', () => {
        it('should check if a color is dark', () => {
            expect(nanocolor('#123').isDark).toEqual(true);
            expect(nanocolor('#808080').isDark).toEqual(false);
            expect(nanocolor('#abc').isDark).toEqual(false);
        });

        it('should check if a color is light', () => {
            expect(nanocolor('#123').isLight).toEqual(false);
            expect(nanocolor('#808080').isLight).toEqual(true);
            expect(nanocolor('#abc').isLight).toEqual(true);
        });

        it('should get a color as hex string', () => {
            expect(nanocolor('#123456').hex).toEqual('#123456');
        });

        it('should get a color as HSL', () => {
            const hsl = nanocolor('#123456').hsl;
            expect(hsl).toEqual({ h: 210, s: 65, l: 20 });
        });

        it('should get a color as RGB', () => {
            const rgb = nanocolor('#123456').rgb;
            expect(rgb).toEqual({ r: 18, g: 52, b: 86 });
        });

        it('should check if two colors are equal', () => {
            expect(nanocolor('#123').equals(nanocolor('#112233'))).toEqual(true);
            expect(nanocolor('#112233').equals('#123')).toEqual(true);

            expect(nanocolor('#112233').equals('#456')).toEqual(false);
            expect(nanocolor('#112233').equals('foobar')).toEqual(false);
        });

        it('should compare two colors', () => {
            expect(nanocolor('#f00').compare(nanocolor('#00f'))).toEqual(-1);
            expect(nanocolor('#00f').compare(nanocolor('#f00'))).toEqual(1);
            expect(nanocolor('#00f').compare(nanocolor('#00f'))).toEqual(0);

            expect(nanocolor('#f00').compare('#00f')).toEqual(-1);
            expect(nanocolor('#00f').compare('#f00')).toEqual(1);
            expect(nanocolor('#00f').compare('#00f')).toEqual(0);

            expect(nanocolor('#c21').shift(1).compare('#c21')).toEqual(1);
            expect(nanocolor('#c21').shift(-1).compare('#c21')).toEqual(-1);
            expect(nanocolor('#c21').lighten().compare('#c21')).toEqual(1);
            expect(nanocolor('#c21').darken().compare('#c21')).toEqual(-1);
            expect(nanocolor('#c21').saturate().compare('#c21')).toEqual(1);
            expect(nanocolor('#c21').desaturate().compare('#c21')).toEqual(-1);
        });

        it('should clone a color', () => {
            const color1 = nanocolor('#123456');
            const color2 = color1.clone();

            expect(color1.equals(color2)).toEqual(true);
            expect(color1).not.toBe(color2);
        });

        it('should format a color for CSS', () => {
            expect(nanocolor('#123456').format()).toEqual('rgb(18, 52, 86)');
            expect(nanocolor('#123456').format(0.42)).toEqual('rgba(18, 52, 86, 0.42)');
        });

        it('should convert a color to a string', () => {
            expect(nanocolor('#123456').toString()).toEqual('#123456');
            expect(nanocolor('#123456').valueOf()).toEqual('#123456');

            expect(nanocolor('#123').toString()).toEqual('#112233');
            expect(nanocolor('#123').valueOf()).toEqual('#112233');
        });

        it('should stringify a color for JSON output', () => {
            const obj = { color: nanocolor('#123456') };
            expect(JSON.stringify(obj)).toEqual('{"color":"#123456"}');
        });
    });


    describe('(static methods)', () => {
        it('should check if given color strings are valid', () => {
            expect(nanocolor.isValid('#123456')).toEqual(true);
            expect(nanocolor.isValid('#123')).toEqual(true);
            expect(nanocolor.isValid('#a1b')).toEqual(true);
            expect(nanocolor.isValid('#ABCDEF')).toEqual(true);
            expect(nanocolor.isValid('#abcdef1')).toEqual(false);
            expect(nanocolor.isValid('#abcdfg')).toEqual(false);
            expect(nanocolor.isValid('foobar')).toEqual(false);
            expect(nanocolor.isValid('#42')).toEqual(false);

            expect(nanocolor('foobar').hex).toEqual('#000000');
        });

        it('should sort an array of colors', () => {
            const colors = ['#0c0', nanocolor('#0ff'), '#c00', '#ff00cc', '#c0f', nanocolor('#0000ff'), '#cf0', '#fc0'];
            const sortedColors = nanocolor.sort(colors).map(c => c.hex);

            expect(sortedColors).toEqual(['#cc0000', '#ffcc00', '#ccff00', '#00cc00', '#00ffff', '#0000ff', '#cc00ff', '#ff00cc']);
        });

        it('should create a color gradient', () => {
            const gradient1 = nanocolor.gradient('#c00', nanocolor('#00c'), 10);
            expect(gradient1.map(c => c.hex)).toEqual(['#cc0000', '#cc5200', '#cca300', '#a3cc00', '#52cc00', '#00cc00', '#00cc52', '#00cca3', '#00a3cc', '#0000cc']);

            const gradient2 = nanocolor.gradient('#000', '#fff', 5);
            expect(gradient2.map(c => c.hex)).toEqual(['#000000', '#333333', '#666666', '#999999', '#ffffff']);

            const gradient3 = nanocolor.gradient('#123', '#456', 1);
            expect(gradient3.map(c => c.hex)).toEqual(['#112233', '#445566']);
        });

        it('should create random colors', () => {
            const randomColor = nanocolor.random();
            expect(nanocolor.isValid(randomColor.hex)).toEqual(true);

            const randomColorWithHue = nanocolor.random(100);
            expect(nanocolor.isValid(randomColorWithHue.hex)).toEqual(true);
            expect(randomColorWithHue.hsl.h).toEqual(100);
        });
    });

});