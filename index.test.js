const request = require('supertest')
const server = require('./index')

describe('APIs', () => {
  it('Should say hello', async () => {
    const res = await request(server)
      .get('/')
      .send()
    expect(res.statusCode).toEqual(200)
    expect(res.body.result).toEqual("Hello World!")
  })
})

afterAll(() => {
  server.close();
});
