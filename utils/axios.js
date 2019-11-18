const axios = require('axios');

module.exports = axios.create({
  baseUrl: 'https://hacker-news.firebaseio.com/v0/'
});
