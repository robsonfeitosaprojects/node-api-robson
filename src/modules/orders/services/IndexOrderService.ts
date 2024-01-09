import { inject, injectable } from 'tsyringe'

import Order from '../infra/typeorm/entities/Order'
import IOrdersRepository from '../repositories/IOrdersRepository'
import IPaginationOptionsDTO from '@modules/dtos/IPaginationOptionsDTO'

@injectable()
class IndexOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}

  public async execute(
    options: IPaginationOptionsDTO,
  ): Promise<[Order[], number]> {
    const orders = await this.ordersRepository.findAndCount(options)
    return orders
  }
}

export default IndexOrderService
