import CustomException from '../exception/CustomException';
import cpfValidator from '../util/cpfValidator'
import IDocumentRepository from '../repository/IDocumentRepository'
import { isValid, parseISO } from 'date-fns'

class DocumentService {
  constructor(
    private documentRepository: IDocumentRepository,
  ) { }

  createDocument(request: DocumentDTO): DocumentDTO {
    if (Object.keys(request).length < 4)
      throw new CustomException('Property missing!')

    const cpf = request.cpf.replace(/[\s.-]*/igm, '')
    const rg = request.rg.replace(/[\s.-]*/igm, '')

    if (!cpfValidator(cpf))
      throw new CustomException("Invalid cpf!")
    if (rg.length !== 9)
      throw new CustomException("Invalid rg!")

    const parsedDocument = {
      fullName: request.fullName,
      birthDate: request.birthDate,
      cpf,
      rg
    }

    this.documentRepository.store(parsedDocument)

    return parsedDocument
  }
}

export default DocumentService