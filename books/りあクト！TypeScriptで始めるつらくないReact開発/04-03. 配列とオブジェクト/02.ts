// オブジェクト

// 変数宣言時に代入
const john: { name: string, age: number } = {name: "John", age: 25};
console.log(john);

// オブジェクトをインターフェイス文で定義する
interface User {
    name: string;
    age?: number;
}

const jane: User = {name: "Jane", age: 27};
console.log(jane);

const jack: User = {name: "Jack"};
console.log(jack);

// Type Alias
type Person = User;
const rick: Person = {name : "Rick", age : 31};
console.log(rick);
