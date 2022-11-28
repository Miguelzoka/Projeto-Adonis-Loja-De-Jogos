
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.resource("/atendimentos", "AtendimentosController").apiOnly()
  Route.resource("/clientes", "ClientesController").apiOnly()
  Route.resource("/fornecedorJogos", "FornecedorJogosController").apiOnly()
  Route.resource("/fornecedors", "FornecedorsController").apiOnly()
  Route.resource("/funcionarios", "FuncionariosController").apiOnly()
  Route.resource("/jogos", "JogosController").apiOnly()
})
