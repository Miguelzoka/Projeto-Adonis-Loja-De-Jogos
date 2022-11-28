import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AtendimentoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    valor: schema.number([
      rules.required(),
    ]),
    produto: schema.string([
      rules.required(),
      rules.alphaNum({
      allow: ['space', 'dash']
      }),
    ]),
    tipo_pagamento: schema.string([
      rules.required(),
      rules.maxLength(20),
    ]),
    funcionario_id: schema.number(),
  })

  public messages: CustomMessages = {
    'required': 'Campo {{ options.required }} obrigatorio ! ',
    'maxLength': 'O campo não pode ultrapassar  {{ options.maxLength }} caracteres ',
  }
}
