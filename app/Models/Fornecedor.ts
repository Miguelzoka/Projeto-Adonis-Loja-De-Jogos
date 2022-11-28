import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Jogo from './Jogo'

export default class Fornecedor extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public cnpj: number

  @column()
  public nome: string

  @manyToMany(() => Jogo, {pivotTable: 'Fornecedor_Jogos'})
  public jogos: ManyToMany<typeof Jogo>
  
}
