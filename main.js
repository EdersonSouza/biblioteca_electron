const {app, BrowserWindow} = require('electron')

// esta é a linha que faz toda a diferença!
const express = require('./api/server');

function createWindow() {
    console.log(express)
    let win = new BrowserWindow(
        {width:1200, 
         height:600, 
         webPreferences:{nodeIntegration:true}}
    )
    // win.webContents.openDevTools()
    win.loadURL('http://localhost:5000/')
    
    win.focus();

    
}

app.whenReady().then(createWindow)