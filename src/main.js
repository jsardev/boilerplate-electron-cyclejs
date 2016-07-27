import electron from 'electron';
import electronConnect from 'electron-connect';

import config from './config';

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const client = electronConnect.client;

let window;

app.on('ready', () => {
    window = new BrowserWindow(config.window);

    window.loadURL(`file://${__dirname}/views/index.html`);

    window.webContents.openDevTools();

    client.create(window);
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});