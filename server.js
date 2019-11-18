const express = require('express');
require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');

const postRouter = require('./routes/postRoute');
const userRouter = require('./routes/userRoute');
const bookmarkRouter = require('./routes/bookmarkRoute');

require('./utils/cronJob');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  return res.json({ message: 'API is up' });
});

server.use(postRouter);
server.use(userRouter);
server.use(bookmarkRouter);

module.exports = server;
