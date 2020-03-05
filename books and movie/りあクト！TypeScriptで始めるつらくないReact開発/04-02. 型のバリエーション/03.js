// 共用体型１
var i = 1;
console.log(i);
i = null;
console.log(i);
// 共用体型２
var some = 'bar';
console.log(some);
some = undefined;
console.log(some);
// 共用体３
var pet = 'dog';
console.log(pet);
pet = 'cat';
console.log(pet);
//pet = 'hamster'; // error TS2322: Type '"hamster"' is not assignable to type '"cat" | "dog" | "rabbit"'.
