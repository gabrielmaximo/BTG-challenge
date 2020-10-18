import express, { request } from 'express'
import DocumentController from './controller/DocumentController'
import sessionController from './controller/SessionController'
import exceptionHandler from './exception/ExceptionHandler'
import ensureAuthenticated from './middleware/ensureAuth'

const app = express()

app.use(express.json())
app.use('/session', sessionController)
app.use('/document', ensureAuthenticated, DocumentController)
app.use(exceptionHandler)

app.listen(3333, () => {
  console.log('Server started on - http://localhost:3333')
})

export default app