import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Fornecedor from 'App/Models/Fornecedor'

export default class extends BaseSeeder {
  public async run () {
    await Fornecedor.createMany([
      {cnpj: 22222, nome: 'kabum'},
      {cnpj: 33333, nome: 'americanas'},
      {cnpj: 44444, nome: 'extra'},
      {cnpj: 55555, nome: 'carrefour'}
    ])
  }
}
