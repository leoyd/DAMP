const ipc = require('electron').ipcRenderer;

document.getElementById('ipc').addEventListener('click', () => {

    ipc.send('log-error', 'Fichier introuvable');
});

ipc.on('error-logged', () => {
    alert('Une erreur a été rencontrée. Consultez le terminal pour plus de détails.');
});