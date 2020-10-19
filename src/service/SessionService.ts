import authConfig from '../config/jwt'
import { sign } from 'jsonwebtoken'
import CustomException from '../exception/CustomException';
import { validate } from 'email-validator'
import SessionDTO from '../dto/SessionDTO';

class SessionService {

  createSession(email: string, password: string, ip: string): SessionDTO {
    if (password.length < 6) throw new CustomException("Invalid password!")

    if (!validate(email)) throw new CustomException("Invalid email!")

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: email,
      expiresIn,
    });

    return { login: { email, token }, ip: ip === "::1" ? "127.0.0.1" : ip }
  }
}

export default SessionService