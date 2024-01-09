import { inject, injectable } from 'tsyringe'

import Order from '../infra/typeorm/entities/Order'
import IOrdersRepository from '../repositories/IOrdersRepository'
import AppError from '@shared/errors/AppError'

@injectable()
class UpdateTrakingCodeService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}

  public async execute(orderId: string, tracking_code: string): Promise<Order> {
    const order = await this.ordersRepository.findById(orderId)

    if (!order) {
      throw new AppError('Order not found')
    }

    order.tracking_code = tracking_code

    await this.ordersRepository.save(order)

    return order
  }
}

export default UpdateTrakingCodeService
