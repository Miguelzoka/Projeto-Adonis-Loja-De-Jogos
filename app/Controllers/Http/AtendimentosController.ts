// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Atendimento from "App/Models/Atendimento";
import AtendimentoValidator from "App/Validators/AtendimentoValidator";

export default class AtendimentosController {
    index() {
        return Atendimento.query().preload("clientes").preload("funcionarios").preload("jogos")
      }
    
      async store({ request }) {
        const dados = await request.validate(AtendimentoValidator);
        return Atendimento.create(dados);
      }
    
      show({ request }) {
        const id = request.param("id");
        return Atendimento.findOrFail(id);
      }
    
      async update({ request }) {
        const id = request.param("id");
        const atendimento = await Atendimento.findOrFail(id);
        const dados = request.only(["valor", "produto",]);
        atendimento.merge(dados);
        return atendimento.save();
      }
    
      async destroy({ request }) {
        const id = request.param("id");
        const atendimento = await Atendimento.findOrFail(id);
        return atendimento.delete();
      }
}
