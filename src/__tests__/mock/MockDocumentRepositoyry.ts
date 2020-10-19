import fs from 'fs'
import IDocumentRepository from '../../repository/IDocumentRepository';

class MockDocumentRepository implements IDocumentRepository {
  store(document: DocumentDTO): void { }
}

export default new MockDocumentRepository()