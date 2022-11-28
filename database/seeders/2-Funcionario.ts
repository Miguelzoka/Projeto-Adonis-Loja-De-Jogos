import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'

export default class extends BaseSeeder {
  public async run () {
    await Funcionario.createMany([
      {nome: 'Roger', cpf: 333, funcao: 'Caixa'},
      {nome: 'Samara', cpf: 666, funcao: 'Atendente'},
      {nome: 'Joao', cpf: 888, funcao: 'Estoquista'},
      {nome: 'Marcela', cpf: 777, funcao: 'Atendente'},
    ])
  }
}
