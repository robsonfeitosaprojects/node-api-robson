import { inject, injectable } from 'tsyringe'

import IPaginationOptionsDTO from '@modules/dtos/IPaginationOptionsDTO'
import IOrderStatusRepository from '../repositories/IOrderStatusRepository'
import OrdersStatus from '../infra/typeorm/entities/OrdersStatus'

@injectable()
class IndexStatusByOrderService {
  constructor(
    @inject('OrderStatusRepository')
    private orderStatusRepository: IOrderStatusRepository,
  ) {}

  public async execute(
    orderId: string,
    options: IPaginationOptionsDTO,
  ): Promise<[OrdersStatus[], number]> {
    const status = await this.orderStatusRepository.findAndCountByOrder(
      orderId,
      options,
    )
    return status
  }
}

export default IndexStatusByOrderService
