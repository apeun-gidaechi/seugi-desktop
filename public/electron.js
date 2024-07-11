"use strict";
exports.__esModule = true;
var electron_1 = require("electron"); // ES import 
var window;
electron_1.app.on("ready", function () {
    window = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: true,
            devTools: true
        }
    });
    window.loadURL("http://127.0.0.1:5173"); //isDev ? 'http://localhost:5173' : `file://${path.join(__dirname, '../build/index.html')}`);
    // window.loadFile("index.html");
});
