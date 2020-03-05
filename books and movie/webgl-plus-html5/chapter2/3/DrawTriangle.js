var main = (function () {
    return function () {
        var canvas = document.getElementById("example");

        if (!canvas) {
            console.log("Canvas要素の取得に失敗");
            return;
        }

        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(120, 10);
        ctx.lineTo(200, 150);
        ctx.lineTo(40, 150);
        ctx.closePath();

        ctx.fillStyle = "rgba(0, 0, 255, 1.0)";
        ctx.fill();
    };
})();