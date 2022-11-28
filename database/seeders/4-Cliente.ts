import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {nome: 'Miguel', cpf: 337, endereco: 'Ceilandia', email:'miguel@gmail.com', atendimentoId: 1},
      {nome: 'Sarah', cpf: 489, endereco: 'Taguatinga', email:'sarah@gmail.com', atendimentoId: 2},
      {nome: 'Marcos', cpf: 588, endereco: 'Aguas Claras', email:'marcos@hotmail.com', atendimentoId: 3},
      {nome: 'Leticia', cpf: 337, endereco: 'Samambaia', email:'leticia@yahoo.com.br', atendimentoId: 4},
    ])
  }
}
