import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClienteValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.required(),
      rules.maxLength(50),
      rules.alpha({allow: ['space']})
    ]),
    cpf: schema.string([
      rules.required(),
      rules.maxLength(11),
      rules.unique({ table: 'clientes', column: 'cpf' })           
    ]),
    endereco: schema.string([
      rules.required()
    ]),
    email: schema.string([
      rules.unique({ table: 'clientes', column: 'email' }),
      rules.email({
        ignoreMaxLength: true,   ////  ignorar comprimento máximo
        allowIpDomain: false,  //// permitir Domínio Ip
        domainSpecificValidation: false, //// validação específica de domínio
      }),
      rules.normalizeEmail({
        allLowercase: true,    //// todas as letras minúsculas
        gmailRemoveDots: true,  //// gmail remover pontos
        gmailRemoveSubaddress: true, //// gmail Remover sub-endereço
      }),
    ]),
    atendimento_id: schema.number(),
  })

  public messages: CustomMessages = {
    'maxLength': 'O campo não pode ultrapassar  {{ options.maxLength }} caracteres ',
    'minLength': 'O campo pode conter no mínimo {{ options.minLength }} comprimento do caractere',
    'required': 'O Campo e obrigatorio',
    'unique': 'O valor do campo  inserido já existe.',
  }
}
