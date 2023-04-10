const { inspect } = require('util');
const functions = require('@google-cloud/functions-framework');

const connectMongoDB = require('./app/common/mongo_conn');
const app = require('./app');

functions.http('api', async (req, res) => {
  return await connectMongoDB().then(() => {
    return app(req, res);
  });
});

functions.http('cron', (req, res) => {
  res.send('cron');
});
