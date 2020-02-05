const multi = n => m => n * m;
console.log(multi(3)(5));   // 15

// 関数の部分適用
const triple = multi(3);
console.log(triple(5));     // 15



