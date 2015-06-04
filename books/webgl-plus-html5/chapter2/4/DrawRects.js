var main = (function () {
    var
        canvas = document.getElementById("example"),
        ctx = canvas.getContext("2d"),
        onclick;

    onclick = function (event) {
        var
            size = 10,
            rect = event.target.getBoundingClientRect(),
            x = event.clientX - rect.left,
            y = event.clientY - rect.top;

        ctx.fillRect(x, y, size, size);
    };

    canvas.onclick = onclick;
})();

