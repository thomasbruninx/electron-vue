const { app, BrowserWindow, Menu } = require('electron');

const url = require("url");
const path = require("path");

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: false,
    }
  })

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `./dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  mainWindow.on('closed', function () {
    mainWindow = null
  })

  createMenu();
}
console.log(app);
app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

function createMenu() {

    var menu = Menu.buildFromTemplate([
        {
            label: 'Menu',
            submenu: [
                {label:'Main',
                  click(){
                    mainWindow.webContents.send('goToMain');
                }},
                {label:'About',                 
                
                 click(){
                    mainWindow.webContents.send('goToAbout');
                }},
                {label:'Developer Tools',
                  click() {
                    mainWindow.webContents.toggleDevTools();
                }},
                {label:'Exit',                 
                    click() { 
                  app.quit() 
                }}
            ]
        }
    ])
    Menu.setApplicationMenu(menu); 
  }