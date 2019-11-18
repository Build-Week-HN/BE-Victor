const cron = require('node-cron');
const savePosts = require('./savePostsToDB');

cron.schedule('* * * * *', () => {
  console.log('saving to db');
  savePosts();
});
