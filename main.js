const { app, BrowserWindow } = require('electron')
const path = require('node:path')
const ipc = require('electron').ipcMain;

var Sequelize = require('sequelize')
var db = require('./models/index')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  mainWindow.loadFile('app/dashboard.html')
  db.sequelize.sync();
}


app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


ipc.on('showCOA', function (event, arg) {
  COAWindow = new BrowserWindow({
    width: 700,
    height: 350,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
    // resizable: false,
    // icon: (__dirname, 'dependancies/images/icon.png')
  })

  COAWindow.loadFile('app/chartof_accounts.html')

  COAWindow.show();


})

ipc.on('showCreateAccount', function (event, arg) {
  COAWindow = new BrowserWindow({
    width: 700,
    height: 350,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
    // resizable: false,
    // icon: (__dirname, 'dependancies/images/icon.png')
  })

  COAWindow.loadFile('app/create_ledger.html')

  COAWindow.webContents.on('did-finish-load', function () {
    COAWindow.show();
    COAWindow.webContents.send('ActionReq', arg);
  })


  // console.log(arg);


})
