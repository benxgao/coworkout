const functions = require('@google-cloud/functions-framework');

const connectMongoDB = require('./app/common/mongo_conn');

functions.http('api', (req, res) => {
  res.send('OK or Not');
});

functions.http('cron', (req, res) => {
  res.send('cron');
});
