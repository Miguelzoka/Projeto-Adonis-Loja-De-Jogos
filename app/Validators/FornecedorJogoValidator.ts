import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FornecedorJogoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    fornecedor_id: schema.number(),
    jogo_id: schema.number(),
  })

  public messages: CustomMessages = {}
}
