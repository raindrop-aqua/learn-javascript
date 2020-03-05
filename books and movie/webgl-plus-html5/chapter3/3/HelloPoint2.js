var main = (function () {
    "use strict";
    var
        canvas = document.getElementById("webgl"),
        vs = document.getElementById("vs").text,
        fs = document.getElementById("fs").text,
        gl = getWebGLContext(canvas),
        a_Position,
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

        a_Position = gl.getAttribLocation(gl.program, 'a_Position');
        if (a_Position < 0) {
            console.log("a_Positionの格納場所の取得に失敗");
            return false;
        }
        return true;
    };

    draw = function () {
        gl.vertexAttrib3f(a_Position, 0.5, 0.2, 0.0);
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