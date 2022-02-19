type HexOrNanocolor = string | Nanocolor;

type Nanocolor = {
    isDark: boolean;
    isLight: boolean;
    hsl: { h: number; s: number; l: number; };
    rgb: { r: number; g: number; b: number; };
    hex: string;

    grayscale(perceived?: boolean): Nanocolor;
    invert(): Nanocolor;
    darken(factor: number): Nanocolor;
    lighten(factor: number): Nanocolor;
    saturate(factor: number): Nanocolor;
    desaturate(factor: number): Nanocolor;
    shift(amount: number): Nanocolor;
    mix(otherColor: HexOrNanocolor, opacity?: number): Nanocolor;
    format(opacity: number): string;
    equals(other: HexOrNanocolor): boolean;
    compare(other: HexOrNanocolor): number;
    clone(): Nanocolor;
    toString(): string;
    toJSON(): string;
    valueOf(): string;
}

declare function nanocolor(hexOrInstance: HexOrNanocolor): Nanocolor;
declare function nanocolor(r: number, g: number, b: number): Nanocolor;

declare class nanocolor {
    static random(hue?: number): Nanocolor;
    static gradient(from: HexOrNanocolor, to: HexOrNanocolor, steps?: number): Nanocolor[];
    static sort(array: (HexOrNanocolor)[]): Nanocolor[];
    static isValid(hex: string): boolean;
}

export default nanocolor;