const request = require('supertest');

const server = require('../../server');

describe('postRoute.js', () => {
  describe('post route', () => {
    it('can successfullyget posts', async () => {
      return request(server)
        .get('/posts')
        .expect(200);
    });
  });
});
