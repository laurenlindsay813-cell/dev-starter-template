const app = require('../src');

describe('App', () => {
  it('should respond with a welcome message on /', async () => {
    const request = require('supertest');
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body.message).toContain('Welcome');
  });

  it('should return health status on /health', async () => {
    const request = require('supertest');
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
  });
});
