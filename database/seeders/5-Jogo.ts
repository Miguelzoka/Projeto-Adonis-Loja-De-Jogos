import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Jogo from 'App/Models/Jogo'

export default class extends BaseSeeder {
  public async run () {
    await Jogo.createMany([
      {nome: 'Dead by Daylight', genero: 'Terror', plataforma: 'PC/XBSS,SX,ONE/PS4/PS5', atendimentoId: 1},
      {nome: 'Overwatch', genero: 'Hero Shooter', plataforma: 'PC/XBSS,SX,ONE', atendimentoId: 2},
      {nome: 'The Forest', genero: 'Terror', plataforma: 'PC', atendimentoId: 3},
      {nome: 'Bioshock Remaster', genero: 'Survival Horror', plataforma: 'PC/PS4/PS5', atendimentoId: 4},
    ])
  }
}
