"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
electron_1.app.on('ready', function () {
    console.log('App is ready');
    var win = new electron_1.BrowserWindow({
        width: 600,
        height: 400
    });
});
