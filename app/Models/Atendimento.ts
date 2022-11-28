import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany} from '@ioc:Adonis/Lucid/Orm'
import Funcionario from './Funcionario'
import Jogo from './Jogo'
import Cliente from './Cliente'

export default class Atendimento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public valor: number

  @column()
  public produto: string

  @column()
  public tipoPagamento: string

  @column()
  public funcionarioId: number

  @belongsTo(() => Funcionario)
  public  funcionarios: BelongsTo<typeof Funcionario>

  @hasMany(() => Jogo)
  public jogos: HasMany<typeof Jogo>

  @hasMany(() => Cliente)
  public clientes: HasMany<typeof Cliente>
  
}
