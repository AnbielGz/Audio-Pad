const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')


// Verifica si esta en entorno de desarrollo para llamar a electron-reload
if (process.env.NODE_ENV !== 'production') { 
    require('electron-reload')(__dirname,{
        electron: path.join(__dirname, '/node_modules', '.bin', 'electron')
    })
}

function createWindow () {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 830,
        height: 640,
        resizable : false,
        center: true,
        webPreferences: { 
            nodeIntegration: true,
        }
    })

    // Abrir las herramientas de desarrollo.
    process.env.NODE_ENV ? "development" : win.webContents.openDevTools()

    win.removeMenu()

    // Cargar el main.html del proyecto.
    win.loadURL(url.format({
        pathname: path.join(__dirname, '/views/main.html'),
        protocol: 'file:',
        slashes: true
    }))

    
}

app.whenReady().then(createWindow)