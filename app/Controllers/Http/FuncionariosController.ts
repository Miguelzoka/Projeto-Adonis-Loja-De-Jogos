
import Funcionario from "App/Models/Funcionario";
import FuncionarioValidator from "App/Validators/FuncionarioValidator";

export default class FuncionariosController {
    index() {
        return Funcionario.query().preload("atendimentos")
      }
    
      async store({ request }) {
        const dados = await request.validate(FuncionarioValidator);
        return Funcionario.create(dados);
      }
    
      show({ request }) {
        const id = request.param("id");
        return Funcionario.findOrFail(id);
      }
    
      async update({ request }) {
        const id = request.param("id");
        const funcionario = await Funcionario.findOrFail(id);
        const dados = request.only(["nome", "cpf"]);
        funcionario.merge(dados);
        return funcionario.save();
      }
    
      async destroy({ request }) {
        const id = request.param("id");
        const funcionario = await Funcionario.findOrFail(id);
        return funcionario.delete();
      }
}
