import { Router } from 'express'
import documentService from '../service/DocumentService'

const DocumentController = Router()

DocumentController.post('/', (req, res) => {
  const document = documentService.createDocument(req.body)

  return res.json(document)
})

export default DocumentController