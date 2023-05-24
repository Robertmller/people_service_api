import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class People extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public su_name: string;

  @column()
  public cpf: string;

  @column()
  public born_date: DateTime;

  @column()
  public cep: string;

  @column()
  public street: string;

  @column()
  public number: Number;

  @column()
  public city: string;

  @column()
  public state: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
