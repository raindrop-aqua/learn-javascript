const ipc = require("electron").ipcRenderer

function send() {
    ipc.send("test", "ping")
}

ipc.on("test-receive", function(event, arg) {
    document.getElementById("out").innerHTML = arg
})
