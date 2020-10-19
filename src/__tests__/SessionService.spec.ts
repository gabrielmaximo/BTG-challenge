import CustomException from '../exception/CustomException'
import SessionService from '../service/SessionService'

describe('Create Session', () => {
  it('should be able to create a new session', () => {
    const sessionService = new SessionService()

    const session = sessionService.createSession("maximo@ufu.br", "123456", "::1")

    expect(session.login.email).toBe("maximo@ufu.br")
    expect(session.login).toHaveProperty("token")
    expect(session.ip).toBe("127.0.0.1")
  })
})

it('should not be able to create a session if a email is invalid',
  () => {
    const sessionService = new SessionService()

    try {
      sessionService.createSession("invalid.com", "123456", "::1")

      expect(false).toBe(true)
    } catch (e) {
      expect(e).toBeInstanceOf(CustomException)
      expect(e.message).toBe('Invalid email!')
    }
  })

it('should not be able to create a session if a password is invalid',
  () => {
    const sessionService = new SessionService()

    try {
      sessionService.createSession("invalid@gmail.com", "123", "::1")

      expect(false).toBe(true)
    } catch (e) {
      expect(e).toBeInstanceOf(CustomException)
      expect(e.message).toBe('Invalid password!')
    }
  })
