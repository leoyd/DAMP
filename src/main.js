const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({width: 1200, height: 600, title: "DAMP : Docker, Apache, Mysql, Php on the fly !",  icon: __dirname + '/assets/img/logo_application.png',});
    mainWindow.removeMenu()
    mainWindow.loadURL(`file://${__dirname}/assets/views/index.html`);
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});