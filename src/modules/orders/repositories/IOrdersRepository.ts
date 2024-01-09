import Order from '../infra/typeorm/entities/Order'

import ICreateOrderDTO from '../dtos/ICreateOrderDTO'
import IPaginationOptionsDTO from '@modules/dtos/IPaginationOptionsDTO'

export default interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<Order>
  findAndCountByUser(
    userId: string,
    options: IPaginationOptionsDTO,
  ): Promise<[Order[], number]>
  findAndCount(options: IPaginationOptionsDTO): Promise<[Order[], number]>
  findById(id: string): Promise<Order | null>
  save(order: Order): Promise<Order>
}
