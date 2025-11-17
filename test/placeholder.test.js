const request = require('supertest')
const app = require('../src/index')

test('GET / debe responder con mensaje correcto', async ()=>{
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
    expect(response.text).toBe('Servidor levantado correctamente')
})
