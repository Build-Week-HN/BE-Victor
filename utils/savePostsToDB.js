const axios = require('axios');
const { addPost } = require('../models/postModel');
const { addComment } = require('../models/commentModel');
const db = require('../data/dbConfig');

const savePosts = async () => {
  try {
    const res = await axios.get(
      'https://hacker-news.firebaseio.com/v0/topstories.json'
    );
    let data = res.data;
    const postsToSave = data.splice(0, 20);
    await db('posts').truncate();
    await db('comments').truncate();
    postsToSave.forEach(async post => {
      try {
        const details = await axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${post}.json`
        );
        const {
          data: { id, descendants, score, by, time, title, url, kids }
        } = details;

        await addPost({
          id,
          comment_count: descendants,
          author: by,
          score,
          time,
          title,
          url
        });

        if (kids && kids.length) {
          kids.forEach(async comment => {
            const details = await axios.get(
              `https://hacker-news.firebaseio.com/v0/item/${comment}.json`
            );

            const {
              data: { by, id, parent, text, time }
            } = details;
            await addComment({ id, post_id: parent, text, author: by, time });
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = savePosts;
