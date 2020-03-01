"use strict";

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

const electron = require("electron");
const { app } = electron;
const { BrowserWindow } = electron;

// 全ウィンドウ終了時の処理
app.on("window-all-closed", () => app.quit());

// 準備が整った場合の処理
app.on("ready", () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: true, webviewTag: true }
  });
  const url = `file://${__dirname}/index.html`;
  win.loadURL(url);
});
