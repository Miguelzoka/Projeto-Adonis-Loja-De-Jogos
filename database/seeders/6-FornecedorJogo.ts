import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import FornecedorJogo from 'App/Models/FornecedorJogo'

export default class extends BaseSeeder {
  public async run () {
    await FornecedorJogo.createMany([
      {fornecedorId: 1, jogoId: 1},
      {fornecedorId: 2, jogoId: 2},
      {fornecedorId: 3, jogoId: 3},
      {fornecedorId: 4, jogoId: 4},
    ])
  }
}
