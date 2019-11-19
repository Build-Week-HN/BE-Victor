const express = require('express');
require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const postRouter = require('./routes/postRoute');
const userRouter = require('./routes/userRoute');
const bookmarkRouter = require('./routes/bookmarkRoute');

require('./utils/cronJob');
const server = express();

const swaggerDefinition = {
  info: {
    title: 'Hackernews Clone with React',
    version: '1.0.0',
    description: 'Endpoints Documentation'
  },
  host: process.env.URL,
  basePath: '/'
};

const options = {
  swaggerDefinition,
  apis: ['./docs/*.js', './routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);
server.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
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
