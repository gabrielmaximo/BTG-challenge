import CustomException from '../exception/CustomException'
import DocumentService from '../service/DocumentService'
import MockDocumentRepositoy from './mock/MockDocumentRepositoyry'

describe('Create Document', () => {
  it('should be able to create a new doccument', () => {
    const documentService = new DocumentService(MockDocumentRepositoy)

    const birthDate = new Date()
    const doc = documentService.createDocument({
      fullName: "Luís Gabriel Máximo",
      birthDate,
      cpf: "388.711.918-54",
      rg: "49.756.769-6"
    })

    expect(doc.fullName).toBe("Luís Gabriel Máximo")
    expect(doc.birthDate).toBe(birthDate)
    expect(doc.cpf).toBe("38871191854")
    expect(doc.rg).toBe("497567696")
  })
})

it('should not be able to create a document if a cpf is invalid',
  () => {
    const documentService = new DocumentService(MockDocumentRepositoy)

    try {
      documentService.createDocument({
        fullName: "Luís Gabriel Máximo",
        birthDate: new Date(),
        cpf: "12345678910",
        rg: "49.756.769-6"
      })

      expect(false).toBe(true)
    } catch (e) {
      expect(e).toBeInstanceOf(CustomException)
      expect(e.message).toBe('Invalid cpf!')
    }
  })

it('should not be able to create a document if a rg is invalid',
  () => {
    const documentService = new DocumentService(MockDocumentRepositoy)

    try {
      documentService.createDocument({
        fullName: "Luís Gabriel Máximo",
        birthDate: new Date(),
        cpf: "388.711.918-54",
        rg: "9999999999999"
      })

      expect(false).toBe(true)
    } catch (e) {
      expect(e).toBeInstanceOf(CustomException)
      expect(e.message).toBe('Invalid rg!')
    }
  })
