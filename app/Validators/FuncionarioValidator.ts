import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FuncionarioValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome : schema.string([
      rules.required(),
      rules.maxLength(50),
      rules.alpha({allow: ['space']}),
    ]),
    cpf: schema.string([
      rules.required(),
      rules.maxLength(11),
      rules.unique({ table: 'funcionarios', column: 'cpf' })
    ]),
    funcao: schema.string([
      rules.required(),
    ]),
  })
  
  public messages: CustomMessages = {
    'maxLength': 'O campo pode conter no máximo {{ options.maxLength }} comprimento do caractere',
    'required': 'Campo {{ options.required }} obrigatorio ! ',
    'unique': 'Já existe usuario cadastrado com esse dados  !'
  }
}
