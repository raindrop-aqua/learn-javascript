// オブジェクトの合成


interface Foo {
    hoge?: number;
    fuga: string;
}

interface Bar {
    hoge: number;
}

interface Buz {
    piyo: string;
}

type FooBar1 = Foo & Bar;           // {hoge: number, fuga: string}
type FooBar2 = Foo | Bar;           // {hoge?: number, fuga: string} or {hoge: number}
type FooBuz1 = Foo & Buz;           // {hoge?: number, fuga: string, piyo: string}
type FooBuz2 = Foo | Buz;           // {hoge?: number, fuga: string} or {piyo: string}
type FooBarBuz = Bar & (Foo | Buz); // {hoge: number, fuga: string} or {hoge: number, piyo: string}