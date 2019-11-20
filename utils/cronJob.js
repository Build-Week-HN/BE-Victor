const cron = require('node-cron');
const savePosts = require('./savePostsToDB');

cron.schedule('*/10 * * * *', () => {
  console.log('saving to db');
  savePosts();
});
