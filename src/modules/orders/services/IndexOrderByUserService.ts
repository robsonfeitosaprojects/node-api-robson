import { inject, injectable } from 'tsyringe'

import Order from '../infra/typeorm/entities/Order'
import IOrdersRepository from '../repositories/IOrdersRepository'
import IPaginationOptionsDTO from '@modules/dtos/IPaginationOptionsDTO'

@injectable()
class IndexOrderByUserService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}

  public async execute(
    userId: string,
    options: IPaginationOptionsDTO,
  ): Promise<[Order[], number]> {
    const orders = await this.ordersRepository.findAndCountByUser(
      userId,
      options,
    )
    return orders
  }
}

export default IndexOrderByUserService
