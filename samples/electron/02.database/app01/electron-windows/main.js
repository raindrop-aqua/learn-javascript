const { app, BrowserWindow } = require("electron");
const ipc = require("electron").ipcMain;
const sqlite3 = require("sqlite3");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipc.on("test", function(event, arg) {
  console.log(arg);
  
  let dir = __dirname + "/data/item.sqlite3";
  console.log(dir);
  var db = new sqlite3.Database(dir);

  db.serialize(function() {
    db.run("create table item(id integer, name char(20))");
  });
  db.close();

  event.sender.send("test-receive", "pong");
});
