import { Router } from 'express'
import sessionService from '../service/SessionService'

const sessionController = Router()

sessionController.post('/', (req, res) => {
  const ip = req.connection.remoteAddress
  const { email, password } = req.body
  const login = sessionService.createSession(email, password)

  return res.json({ login, ip: ip == "::1" ? "127.0.0.1" : ip })
})

export default sessionController