const ipc = require('electron').ipcRenderer;

document.getElementById('ipc').addEventListener('click', () => {
    ipc.send('log-error');
});