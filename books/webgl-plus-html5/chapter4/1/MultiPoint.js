var main = function () {
    "use strict";
    var
        canvas = document.getElementById("webgl"),
        vs = document.getElementById("vs").text,
        fs = document.getElementById("fs").text,
        gl = getWebGLContext(canvas),
        n,
        a_Position,
        init,
        draw,
        initVertexBuffers;

    init = function () {
        if (!gl) {
            console.log("WebGLコンテキストの取得に失敗");
            return false;
        }

        if (!initShaders(gl, vs, fs)) {
            console.log("シェーダの初期化に失敗");
            return false;
        }

        n = initVertexBuffers(gl);
        if (n < 0) {
            console.log("頂点座標の設定に失敗");
            return false;
        }
        return true;
    };

    initVertexBuffers = function () {
        var
            vertices = new Float32Array([
                 0.0,  0.5,
                -0.5, -0.5,
                 0.5, -0.5
            ]),
            n = 3,
            vertexBuffer;

        vertexBuffer = gl.createBuffer();
        if (!vertexBuffer) {
            console.log("バッファオブジェクトの作成に失敗");
            return -1;
        }
        // バッファオブジェクトをバインドする
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        // バッファオブジェクトにデータを書き込む
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        a_Position = gl.getAttribLocation(gl.program, "a_Position");
        if (a_Position < 0) {
            console.log("a_Positionの格納場所の取得に失敗");
            return -1;
        }

        // a_Position変数にバッファオブジェクトを割り当てる
        gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
        // a_Position変数でのバッファオブジェクトの割り当てを有効にする
        gl.enableVertexAttribArray(a_Position);

        return n;
    };

    draw = function () {
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.POINTS, 0, n);
    };

    init();
    draw();

};