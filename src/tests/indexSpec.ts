import supertest from 'supertest';
import app from '..';

const request = supertest(app);
describe('Test endpoint responses', () => {
  describe('working endpoint responses', () => {
    it('tests whether server started', async () => {
      const response = await request.get('/api');
      expect(response.status).toBe(200);
    });

    it('test whether routes endpoint(/api/images?filename=fjord&width=100&height=100) is working', async () => {
      const response = await request.get(
        '/api/images?filename=fjord&width=100&height=100'
      );
      expect(response.status).toBe(200);
    });
  });

  describe('failing endpoint responses', () => {
    it('when endpoint(/api/images) is accessed', async () => {
      const response = await request.get('/api/images');
      expect(response.status).toBe(200);
    });
    it('when endpoint(/api/images?filename=jasmine) is accessed', async () => {
      const response = await request.get('/api/images?filename=jasmine');
      expect(response.status).toBe(200);
    });
    it('when endpoint(/api/images?filename=jasmine&width) is accessed', async () => {
      const response = await request.get('/api/images?filename=jasmine&width');
      expect(response.status).toBe(200);
    });
    it('when endpoint(/api/images?filename=jasmine&width=1000&height) is accessed', async () => {
      const response = await request.get(
        '/api/images?filename=jasmine&width=1000&height'
      );
      expect(response.status).toBe(200);
    });
  });
});
