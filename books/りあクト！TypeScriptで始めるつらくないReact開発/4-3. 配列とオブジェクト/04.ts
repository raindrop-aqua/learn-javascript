// readonly


const arr1: ReadonlyArray<string> = ["foo", "bar"];
const arr2: readonly string[] = ["foo", "bar"];

arr1[0] = "buz";    // TS2542: Index signature in type 'readonly string[]' only permits reading.
arr2[1] = "buz";    // TS2542: Index signature in type 'readonly string[]' only permits reading.

const obj1: Readonly<{foo: number}> = {foo: 2};

obj1.foo = 8;       // TS2540: Cannot assign to 'foo' because it is a read-only property.
