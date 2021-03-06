const express = require('express');

const app = express();

app.use(express.static('./dist/gestProAdmin'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/gestProAdmin/'}),
);

app.listen(process.env.PORT || 8080);
