import { app, BrowserWindow } from 'electron';

app.on('ready', () => {
  console.log('App is ready');
  const win = new BrowserWindow({
    width: 600,
    height: 400
  });
});