// コレクションの分割代入
const [n, m] = [1, 4];
console.log(n, m);

// オブジェクトの分割代入
const obj = {name: 'Kanae', age: 24};
const {name, age} = obj;
console.log(name, age);

// コレクションの展開構文
const arr1 = ['A', 'B', 'C'];
const arr2 = [...arr1, 'D', 'E'];
console.log(arr2);

// オブジェクトの展開構文
const obj1 = {a: 1, b: 2, c: 3};
const obj2 = {...obj1, d: 4, e: 5};
console.log(obj2);

// プロパティ名のショートハンド
const foo = 65536;
const obj3 = {foo, bar: 4096};
console.log(obj3);
