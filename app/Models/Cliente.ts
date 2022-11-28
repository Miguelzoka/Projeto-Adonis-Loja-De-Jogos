import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column} from '@ioc:Adonis/Lucid/Orm'
import Atendimento from './Atendimento'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public nome: string

  @column()
  public cpf: number

  @column()
  public endereco: string

  @column()
  public email: string

  @column()
  public atendimentoId: number

  @belongsTo(() => Atendimento)
  public atendimentos: BelongsTo<typeof Atendimento>

}
