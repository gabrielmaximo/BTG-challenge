import { Router } from 'express'
import DocumentRepository from '../repository/impl/DocumentRepository'
import DocumentService from '../service/DocumentService'

const DocumentController = Router()

DocumentController.post('/', (req, res) => {
  const doc: DocumentDTO = req.body

  const document = new DocumentService(new DocumentRepository)
    .createDocument(doc)

  return res.status(201).json(document)
})

export default DocumentController