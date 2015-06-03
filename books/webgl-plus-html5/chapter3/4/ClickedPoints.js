var main = function () {
  "use strict";
  var
    canvas = document.getElementById("webgl"),
    vs = document.getElementById("vs").text,
    fs = document.getElementById("fs").text,
    gl = getWebGLContext(canvas),
    a_Position,
    g_points = [],
    init, draw, onclick;

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
    canvas.onclick = onclick;
    return true;
  };

  draw = function () {
    var
      len = g_points.length,
      i, xy;

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    for (i = 0; i < len; i++) {
      xy = g_points[i];

      gl.vertexAttrib3f(a_Position, xy[0], xy[1], 0.0);
      gl.drawArrays(gl.POINTS, 0, 1);
    }
    return true;
  };

  onclick = function (event) {
    var
      x = event.clientX,
      y = event.clientY,
      rect = event.target.getBoundingClientRect();

    x = ((x - rect.left) - canvas.height / 2) / (canvas.height / 2);
    y = ((canvas.width / 2) - (y - rect.top)) / (canvas.width / 2);

    g_points.push([x, y]);

    draw();
  };

  init();
  draw();
};
