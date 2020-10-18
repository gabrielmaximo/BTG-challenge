import authConfig from '../config/jwt'
import { sign } from 'jsonwebtoken'
import CustomException from '../exception/CustomException';
import { validate } from 'email-validator'

class SessionService {

  createSession(email: string, password: string): LoginDTO {
    if (password.length < 6) throw new CustomException("Invalid password!")

    if (!validate(email)) throw new CustomException("Invalid email!")

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: email,
      expiresIn,
    });

    return { email, token }
  }
}

export default new SessionService()