import Jogo from "App/Models/Jogo";
import JogoValidator from "App/Validators/JogoValidator";

export default class JogosController {
    index() {
        return Jogo.query().preload("atendimentos").preload("fornecedores")
      }
    
      async store({ request }) {
        const dados = await request.validate(JogoValidator);
        return Jogo.create(dados);
      }
    
      show({ request }) {
        const id = request.param("id");
        return Jogo.findOrFail(id);
      }
    
      async update({ request }) {
        const id = request.param("id");
        const jogo = await Jogo.findOrFail(id);
        const dados = request.only(["genero", "plataforma"]);
        jogo.merge(dados);
        return jogo.save();
      }
    
      async destroy({ request }) {
        const id = request.param("id");
        const jogo = await Jogo.findOrFail(id);
        return jogo.delete();
      }
}
