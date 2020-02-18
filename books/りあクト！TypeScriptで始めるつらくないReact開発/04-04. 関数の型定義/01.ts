// 引数と返り値の型宣言


const add = (n: number, m: number): number => n + m;
console.log(add(1, 3));

function subst(n: number, m: number): number {
    return n - m;
}
console.log(subst(5, 4));

const hello = (): void => {
    console.log("Hello");
};
hello();
