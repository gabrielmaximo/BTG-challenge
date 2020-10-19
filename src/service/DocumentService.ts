import CustomException from '../exception/CustomException';
import cpfValidator from '../util/cpfValidator'
import IDocumentRepository from '../repository/IDocumentRepository'
import DocumentDTO from '../dto/DocumentDTO';

class DocumentService {
  constructor(
    private documentRepository: IDocumentRepository,
  ) { }

  createDocument({ birthDate, cpf, fullName, rg }: DocumentDTO): DocumentDTO {
    const parsedCpf = cpf.replace(/[\s.-]*/igm, '')
    const parsedRg = rg.replace(/[\s.-]*/igm, '')

    if (!cpfValidator(parsedCpf))
      throw new CustomException("Invalid cpf!")
    if (parsedRg.length !== 9)
      throw new CustomException("Invalid rg!")

    const parsedDocument = {
      fullName: fullName,
      birthDate: birthDate,
      cpf: parsedCpf,
      rg: parsedRg
    }

    this.documentRepository.store(parsedDocument)

    return parsedDocument
  }
}

export default DocumentService