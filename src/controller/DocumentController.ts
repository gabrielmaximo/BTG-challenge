import { Router } from 'express'
import DocumentRepository from '../repository/impl/DocumentRepository'
import DocumentService from '../service/DocumentService'

const DocumentController = Router()

DocumentController.post('/', (req, res) => {
  const document = new DocumentService(new DocumentRepository)
    .createDocument(req.body)

  return res.json(document)
})

export default DocumentController