import FornecedorJogo from "App/Models/FornecedorJogo";
import FornecedorJogoValidator from "App/Validators/FornecedorJogoValidator";

export default class FornecedorJogosController {
    index() {
        return FornecedorJogo.query();
      }
    
      async store({ request }) {
        const dados = await request.validate(FornecedorJogoValidator);
        return FornecedorJogo.create(dados);
      }
    
      show({ request }) {
        const id = request.param("id");
        return FornecedorJogo.findOrFail(id);
      }
    
      async update({ request }) {
        const id = request.param("id");
        const fornecedorjogo = await FornecedorJogo.findOrFail(id);
        const dados = request.all;
        fornecedorjogo.merge(dados);
        return fornecedorjogo.save();
      }
    
      async destroy({ request }) {
        const id = request.param("id");
        const fornecedorjogo = await FornecedorJogo.findOrFail(id);
        return fornecedorjogo.delete();
      }
}
