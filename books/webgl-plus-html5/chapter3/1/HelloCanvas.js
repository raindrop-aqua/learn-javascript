var main = function () {
  var
    canvas = document.getElementById("example"),
    gl = canvas.getContext("webgl");

  if (!gl) {
    console.log("WebGLコンテキストの取得に失敗")
  }

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

};
