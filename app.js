const express = require('express');
const path = require('path')
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'webroot')));

app.listen(port, '0.0.0.0', () => {
    console.log("IntelliSTAR 1 by Mist Weather Media")
    console.log(`Webroot serving on 127.0.0.1:${port}`);
  });