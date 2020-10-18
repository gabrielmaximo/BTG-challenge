import CustomException from '../exception/CustomException';
import cpfValidator from '../util/CpfValidator'
import fs from 'fs'

class DocumentService {
  createDocument(request: DocumentDTO): DocumentDTO {
    const cpf = request.cpf.replace(/[\s.-]*/igm, '')
    const rg = request.rg.replace(/[\s.-]*/igm, '')

    if (!cpfValidator(cpf)) throw new CustomException("Invalid cpf!")
    if (rg.length !== 9) throw new CustomException("Invalid rg!")

    const response = {
      fullName: request.fullName,
      birthDate: request.birthDate,
      cpf,
      rg
    }

    const document = JSON.stringify(response)
      .replace(/[,]/g, ',\n  ')
      .replace(/[:]/g, ': ')
      .replace('{', '{\n  ')
      .replace('}', '\n}')

    fs.writeFile(`src/tmp/${cpf}.txt`, document, (err) => {
      if (err) {
        throw err;
      }
    });

    return response
  }
}

export default new DocumentService()