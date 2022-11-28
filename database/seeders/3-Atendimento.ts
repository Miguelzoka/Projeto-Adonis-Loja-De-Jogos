import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Atendimento from 'App/Models/Atendimento'

export default class extends BaseSeeder {
  public async run () {
    await Atendimento.createMany([
      {valor: 60, produto: 'Dead by Daylight', tipoPagamento: 'Pix', funcionarioId: 1},
      {valor: 50, produto: 'Overwatch', tipoPagamento: 'Boleto', funcionarioId: 2},
      {valor: 30, produto: 'The Forest', tipoPagamento: 'Debito', funcionarioId: 3},
      {valor: 45, produto: 'Bioshock Remaster', tipoPagamento: 'Credito', funcionarioId: 4},
])
  }
}
