// never
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
