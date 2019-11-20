const request = require('supertest');
const db = require('../../data/dbConfig');

const server = require('../../server');

beforeEach(async () => {
  await db('users').truncate();
});

describe('userRoute.js', () => {
  describe('user route', () => {
    it('can successfully signup', async () => {
      return request(server)
        .post('/register')
        .set('Accept', 'application/json')
        .send({ username: 'john', password: 'test' })
        .expect(201);
    });

    it('can unsuccessfully login', async () => {
      return request(server)
        .post('/login')
        .set('Accept', 'application/json')
        .send({ username: 'john1', password: 'test' })
        .expect(400);
    });

    it('can successfully login', async () => {
      await request(server)
        .post('/register')
        .set('Accept', 'application/json')
        .send({ username: 'username', password: 'password' });
      return request(server)
        .post('/login')
        .set('Accept', 'application/json')
        .send({ username: 'username', password: 'password' })
        .expect(200);
    });
  });
});
