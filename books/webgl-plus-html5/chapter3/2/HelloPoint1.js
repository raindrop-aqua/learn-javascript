var main = (function () {
    var
        canvas = document.getElementById("webgl"),
        vs = document.getElementById("vs").text,
        fs = document.getElementById("fs").text,
        gl = getWebGLContext(canvas),
        init, draw;

    init = function () {
        if (!gl) {
            console.log("WebGLコンテキストの取得に失敗");
            return false;
        }

        if (!initShaders(gl, vs, fs)) {
            console.log("シェーダの初期化に失敗");
            return false;
        }
        return true;
    };

    draw = function () {
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.POINTS, 0, 1);
        return true;
    };

    return function () {
        init();
        draw();
    };
})();