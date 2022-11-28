import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FornecedorValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    cnpj: schema.number([
      rules.required(),
    ]),
    nome: schema.string([
      rules.required(),
    ]),
  })

  public messages: CustomMessages = {}
}
