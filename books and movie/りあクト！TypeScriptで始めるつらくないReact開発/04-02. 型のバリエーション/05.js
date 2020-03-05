// never
// case のどれかを削除すると、check: never に値が入ることになり、コンパイルエラーとなる。
var greet = function (friend) {
    switch (friend) {
        case "serval":
            return "Hello, Serval!";
        case "caracal":
            return "Hello, Caracal!";
        case "cheetah":
            return "Hello Cheetah!";
        default:
            var check = friend;
    }
};
console.log(greet("serval")); // Hello, Serval!
