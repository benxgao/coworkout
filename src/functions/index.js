const functions = require('@google-cloud/functions-framework');

functions.http('test', (req, res) => {
  res.send('OK');
});
