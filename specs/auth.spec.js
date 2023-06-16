import {client} from 'common'

describe('Authorization & Authentication', () => {
  test('Sign in with existing credentials', async () => {
    const payload = {
      method: 'post',
      url: '/auth',
      data: {
        login: process.env.USERNAME,
        password: process.env.PASSWORD,
      },
    }

    const response = await client.request(payload)

    expect(response.status).toEqual(200)
    expect(response.data).toEqual({
      token: expect.any(String),
    })
  })

  test('Sign in with not existing credentials', async () => {
    const payload = {
      method: 'post',
      url: '/auth',
      data: {
        login: 'invalid',
        password: 'invalid',
      },
    }

    const response = await client.request(payload)

    expect(response.status).toEqual(404)
    expect(response.data).toEqual({
      message: expect.any(String),
    })
  })
})
