const request = require('supertest');
const db = require('../../data/dbConfig');

const server = require('../../server');

beforeEach(async () => {
  await db('bookmarks').truncate();
});

describe('bookmarkRoute.js', () => {
  describe('bookmark route', () => {
    it('can unsuccessfully add a bookmark', async () => {
      return request(server)
        .post('/bookmarks')
        .set('Accept', 'application/json')
        .send({ postId: 2324 })
        .expect(401);
    });

    it('can successfully add a bookmark', async () => {
      let user = { username: 'user1', password: 'pass' };
      let register = await request(server)
        .post('/register')
        .send(user);

      return request(server)
        .post('/bookmarks')
        .set('Authorization', register.body.token)
        .set('Accept', 'application/json')
        .send({ postId: 2324 })
        .expect(201);
    });

    it('can get bookmarks', async () => {
      let user = { username: 'user', password: 'pass' };
      let register = await request(server)
        .post('/register')
        .send(user);

      return request(server)
        .get('/bookmarks')
        .set('Authorization', register.body.token)
        .expect(200);
    });
  });
});
