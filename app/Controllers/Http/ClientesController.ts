
import Cliente from "App/Models/Cliente";
import ClienteValidator from "App/Validators/ClienteValidator";

export default class ClientesController {
    index() {
        return Cliente.query().preload("atendimentos")
      }
    
      async store({ request }) {
        const dados = await request.validate(ClienteValidator);
        return Cliente.create(dados);
      }
    
      show({ request }) {
        const id = request.param("id");
        return Cliente.findOrFail(id);
      }
    
      async update({ request }) {
        const id = request.param("id");
        const cliente = await Cliente.findOrFail(id);
        const dados = request.only(["nome", "endereco", "cep"]);
        cliente.merge(dados);
        return cliente.save();
      }
    
      async destroy({ request }) {
        const id = request.param("id");
        const cliente = await Cliente.findOrFail(id);
        return cliente.delete();
      }
}
