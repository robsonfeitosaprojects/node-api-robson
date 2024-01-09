import { ICreateOrderStatusDTO } from '../dtos/ICreateOrderDTO'
import IPaginationOptionsDTO from '@modules/dtos/IPaginationOptionsDTO'
import OrdersStatus from '../infra/typeorm/entities/OrdersStatus'

export default interface IOrderStatusRepository {
  create(data: ICreateOrderStatusDTO): Promise<OrdersStatus>
  findAndCountByOrder(
    orderId: string,
    options: IPaginationOptionsDTO,
  ): Promise<[OrdersStatus[], number]>
  findAndCount(
    options: IPaginationOptionsDTO,
  ): Promise<[OrdersStatus[], number]>
  findById(id: string): Promise<OrdersStatus | null>
}
