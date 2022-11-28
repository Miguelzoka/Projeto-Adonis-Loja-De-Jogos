import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FornecedorValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    cnpj: schema.number([
      rules.required(),
      rules.maxLength(20),
      rules.unique({ table: 'fornecedors', column: 'cnpj' })
    ]),
    nome: schema.string([
      rules.required(),
      rules.alphaNum({allow: ['space', 'underscore', 'dash']} )
    ]),
  })

  public messages: CustomMessages = {
    'maxLength': 'O campo pode conter no máximo {{ options.maxLength }} comprimento do caractere',
    'required': 'Campo {{ options.required }} obrigatorio',
    'unique': 'dados de usuario  já cadastrado! ',
  }
}
