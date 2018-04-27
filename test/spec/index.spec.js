import nanocolor from '@/index';

describe('nanocolor', function(){

    describe('(chainable methods)', function(){
        it('should convert a color to grayscale', function(){
            expect(nanocolor('#ff9900').grayscale().toString()).toEqual('#808080');
            expect(nanocolor('#f00').grayscale().toString()).toEqual('#808080');
            expect(nanocolor('#123456').grayscale().toString()).toEqual('#343434');

            expect(nanocolor('#fff').grayscale().toString()).toEqual('#ffffff');
            expect(nanocolor('#000').grayscale().toString()).toEqual('#000000');
            expect(nanocolor('#ccc').grayscale().toString()).toEqual('#cccccc');
        });

        it('should invert a color', function(){
            expect(nanocolor('#ff9900').invert().toString()).toEqual('#0066ff');
            expect(nanocolor('#f00').invert().toString()).toEqual('#00ffff');

            expect(nanocolor('#000').invert().toString()).toEqual('#ffffff');
            expect(nanocolor('#fff').invert().toString()).toEqual('#000000');
            expect(nanocolor('#808080').invert().toString()).toEqual('#7f7f7f');
        });

        it('should darken a color', function(){
            expect(nanocolor('#ff9900').darken().toString()).toEqual('#b36b00');
            expect(nanocolor('#c00').darken().toString()).toEqual('#8f0000');

            expect(nanocolor('#ff9900').darken(50).toString()).toEqual('#804d00');
            expect(nanocolor('#c00').darken(100).toString()).toEqual('#000000');

            expect(nanocolor('#000').darken().toString()).toEqual('#000000');
            expect(nanocolor('#fff').darken().toString()).toEqual('#b3b3b3');
        });

        it('should lighten a color', function(){
            expect(nanocolor('#ff9900').lighten().toString()).toEqual('#ffb84d');
            expect(nanocolor('#c00').lighten().toString()).toEqual('#ff0a0a');

            expect(nanocolor('#ff9900').lighten(50).toString()).toEqual('#ffcc80');
            expect(nanocolor('#c00').lighten(100).toString()).toEqual('#ff9999');

            expect(nanocolor('#000').lighten().toString()).toEqual('#000000'); // should probably overthink this behavior...
            expect(nanocolor('#fff').lighten().toString()).toEqual('#ffffff');
        });

        it('should saturate a color', function(){
            expect(nanocolor('#cc2211').saturate().toString()).toEqual('#dd1400');
            expect(nanocolor('#cc2211').saturate(50).toString()).toEqual('#dd1400');

            expect(nanocolor('#ff9900').saturate().toString()).toEqual('#ff9900');
            expect(nanocolor('#808080').saturate().toString()).toEqual('#808080');
        });

        it('should desaturate a color', function(){
            expect(nanocolor('#cc2211').desaturate().toString()).toEqual('#b0392d');
            expect(nanocolor('#cc2211').desaturate(50).toString()).toEqual('#9d4840');

            expect(nanocolor('#ff9900').desaturate().toString()).toEqual('#d99126');
            expect(nanocolor('#808080').desaturate().toString()).toEqual('#808080');
        });

        it('should shift the hue of a color', function(){
            expect(nanocolor('#f00').shift(100).toString()).toEqual('#55ff00');
            expect(nanocolor('#f00').shift(100).getHSL().h).toEqual(100);
            
            expect(nanocolor('#f00').shift(-100).toString()).toEqual('#5500ff');
            expect(nanocolor('#f00').shift(-100).getHSL().h).toEqual(260);

            expect(nanocolor('#f00').shift(360).toString()).toEqual('#ff0000');
            expect(nanocolor('#f00').shift(460).toString()).toEqual('#55ff00');
        });

        it('should chain functions', function(){
            expect(nanocolor('#ff9900').lighten(50).shift(150).desaturate().toString()).toEqual('#93e3ec');
        });
    });


    describe('(instance methods)', function(){
        it('should check if a color is dark', function(){
            expect(nanocolor('#123').isDark()).toEqual(true);
            expect(nanocolor('#808080').isDark()).toEqual(false);
            expect(nanocolor('#abc').isDark()).toEqual(false);
        });

        it('should check if a color is light', function(){
            expect(nanocolor('#123').isLight()).toEqual(false);
            expect(nanocolor('#808080').isLight()).toEqual(true);
            expect(nanocolor('#abc').isLight()).toEqual(true);
        });

        it('should get a color as HSL', function(){
            const hsl = nanocolor('#123456').getHSL();
            expect(hsl).toEqual({ h: 210, s: 65, l: 20 });
        });

        it('should get a color as RGB', function(){
            const rgb = nanocolor('#123456').getRGB();
            expect(rgb).toEqual({ r: 18, g: 52, b: 86 });
        });

        it('should check if two colors are equal', function(){
            expect(nanocolor('#123').equals(nanocolor('#112233'))).toEqual(true);
            expect(nanocolor('#112233').equals('#123')).toEqual(true);

            expect(nanocolor('#112233').equals('#456')).toEqual(false);
            expect(nanocolor('#112233').equals('foobar')).toEqual(false);
        });

        it('should compare two colors', function(){
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

        it('should clone a color', function(){
            const color1 = nanocolor('#123456');
            const color2 = color1.clone();

            expect(color1.equals(color2)).toEqual(true);
            expect(color1).not.toBe(color2);
        });

        it('should convert a color to a string', function(){
            expect(nanocolor('#123456').toString()).toEqual('#123456');
            expect(nanocolor('#123456').valueOf()).toEqual('#123456');

            expect(nanocolor('#123').toString()).toEqual('#112233');
            expect(nanocolor('#123').valueOf()).toEqual('#112233');
        });
    });


    describe('(static methods)', function(){
        it('should check if given color strings are valid', function(){
            expect(nanocolor.isValid('#123456')).toEqual(true);
            expect(nanocolor.isValid('#123')).toEqual(true);
            expect(nanocolor.isValid('#a1b')).toEqual(true);
            expect(nanocolor.isValid('#ABCDEF')).toEqual(true);
            expect(nanocolor.isValid('#abcdef1')).toEqual(false);
            expect(nanocolor.isValid('#abcdfg')).toEqual(false);
            expect(nanocolor.isValid('foobar')).toEqual(false);
            expect(nanocolor.isValid('#42')).toEqual(false);

            expect(nanocolor('foobar').toString()).toEqual('#000000');
        });

        it('should sort an array of colors', function(){
            const colors = ['#0c0', nanocolor('#0ff'), '#c00', '#ff00cc', '#c0f', nanocolor('#0000ff'), '#cf0', '#fc0'];
            const sortedColors = nanocolor.sort(colors).map(c => c.toString());

            expect(sortedColors).toEqual(['#cc0000', '#ffcc00', '#ccff00', '#00cc00', '#00ffff', '#0000ff', '#cc00ff', '#ff00cc']);
        });

        it('should create a color gradient', function(){
            const gradient1 = nanocolor.gradient('#c00', nanocolor('#00c'), 10);
            expect(gradient1.map(c => c.toString())).toEqual(['#cc0000', '#cc5200', '#cca300', '#a3cc00', '#52cc00', '#00cc00', '#00cc52', '#00cca3', '#00a3cc', '#0000cc']);

            const gradient2 = nanocolor.gradient('#000', '#fff', 5);
            expect(gradient2.map(c => c.toString())).toEqual(['#000000', '#333333', '#666666', '#999999', '#ffffff']);

            const gradient3 = nanocolor.gradient('#123', '#456', 1);
            expect(gradient3.map(c => c.toString())).toEqual(['#112233', '#445566']);
        });

        it('should create random colors', function(){
            const randomColor = nanocolor.random();
            expect(nanocolor.isValid(randomColor.toString())).toEqual(true);

            const randomColorWithHue = nanocolor.random(100);
            expect(nanocolor.isValid(randomColorWithHue.toString())).toEqual(true);
            expect(randomColorWithHue.getHSL().h).toEqual(100);
        });
    });

});