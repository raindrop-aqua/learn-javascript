import { app, BrowserWindow } from "electron";

class Main {
    constructor() {
        app.whenReady().then(this.createWindow);

        app.on("window-all-closed", () => {
            if (process.platform !== "darwin") {
                app.quit();
            }
        });

        app.on("activate", () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                this.createWindow();
            }
        });
    }

    createWindow = () => {
        const win = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true
            }
        });
        win.loadFile("src/index.html");
    };
}

const main = new Main();
