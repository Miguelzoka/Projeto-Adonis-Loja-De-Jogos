import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class JogoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.required(),
      rules.maxLength(50),
      rules.alphaNum({allow: ['space', 'underscore', 'dash']} ),
    ]),
    genero: schema.string([
      rules.required(),
      rules.maxLength(30),
    ]),
    plataforma: schema.string([
      rules.required(),
      rules.alphaNum({allow: ['space', 'underscore', 'dash']} ),
    ]),
    atendimento_id: schema.number(),
  })

  public messages: CustomMessages = {
    'maxLength': 'O campo pode conter no máximo {{ options.maxLength }} comprimento do caractere',
    'required': 'Campo {{ options.required }} obrigatorio',
  }
}
