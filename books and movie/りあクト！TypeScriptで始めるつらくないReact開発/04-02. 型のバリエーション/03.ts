// 共用体型１
let i: number | null = 1;
console.log(i);

i = null;
console.log(i);

// 共用体型２
let some: number | string | undefined = 'bar';
console.log(some);

some = undefined;
console.log(some);

// 共用体３
let pet: 'cat' | 'dog' | 'rabbit' = 'dog';
console.log(pet);
pet = 'cat';
console.log(pet);
//pet = 'hamster'; // error TS2322: Type '"hamster"' is not assignable to type '"cat" | "dog" | "rabbit"'.
