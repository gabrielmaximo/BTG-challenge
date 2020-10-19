import { Router } from 'express'
import SessionService from '../service/SessionService'

const sessionController = Router()

sessionController.post('/', (req, res) => {
  const ip = req.connection.remoteAddress
  const { email, password } = req.body
  const session = new SessionService().createSession(email, password, ip!)

  return res.json(session)
})

export default sessionController