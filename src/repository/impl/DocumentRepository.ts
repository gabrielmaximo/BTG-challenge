import fs from 'fs'
import IDocumentRepository from '../IDocumentRepository';

class DocumentRepository implements IDocumentRepository {
  store(document: DocumentDTO): void {
    const formattedDocument = JSON.stringify(document)
      .replace(/[,]/g, ',\n  ')
      .replace(/[:]/g, ': ')
      .replace('{', '{\n  ')
      .replace('}', '\n}')

    fs.writeFile(`tmp/${document.cpf}.txt`, formattedDocument, (err) => {
      if (err) {
        throw err;
      }
    });
  }
}

export default DocumentRepository