import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Atendimento from './Atendimento'
import Fornecedor from './Fornecedor'

export default class Jogo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public nome: string

  @column()
  public genero: string

  @column()
  public plataforma: string

  @column()
  public atendimentoId: number

  @belongsTo (() => Atendimento)
  public atendimentos: BelongsTo<typeof Atendimento>

  @manyToMany(() => Fornecedor, {pivotTable: 'Fornecedor_Jogos'})
  public fornecedores: ManyToMany<typeof Fornecedor>

}
