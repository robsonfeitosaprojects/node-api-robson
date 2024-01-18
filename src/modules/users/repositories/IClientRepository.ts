import Client from '../infra/typeorm/entities/Client'

import IPaginationOptionsDTO from '../../dtos/IPaginationOptionsDTO'
import ICreateClientDTO from '../dtos/ICreateClientDTO'

export default interface IClientRepository {
  findById(id: string): Promise<Client | null>
  findAndCount(options: IPaginationOptionsDTO): Promise<[Client[], number]>
  create(data: ICreateClientDTO): Promise<Client>
  delete(id: string): Promise<void>
  save(data: Client): Promise<Client>
}
