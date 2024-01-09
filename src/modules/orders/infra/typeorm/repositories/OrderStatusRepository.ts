import { Repository } from 'typeorm'

import dataSource from '@shared/infra/typeorm'
import { ICreateOrderStatusDTO } from '@modules/orders/dtos/ICreateOrderDTO'
import IPaginationOptionsDTO from '@modules/dtos/IPaginationOptionsDTO'
import OrdersStatus from '../entities/OrdersStatus'
import IOrderStatusRepository from '@modules/orders/repositories/IOrderStatusRepository'

class OrderStatusRepository implements IOrderStatusRepository {
  private ormRepository: Repository<OrdersStatus>

  constructor() {
    this.ormRepository = dataSource.getRepository(OrdersStatus)
  }

  public async create(payload: ICreateOrderStatusDTO): Promise<OrdersStatus> {
    const order = this.ormRepository.create(payload)

    await this.ormRepository.save(order)

    return order
  }

  public async findAndCountByOrder(
    orderId: string,
    options: IPaginationOptionsDTO,
  ): Promise<[OrdersStatus[], number]> {
    const orders = await this.ormRepository.findAndCount({
      order: {
        created_at: 'DESC',
      },
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      where: {
        order_id: orderId,
      },
    })

    return orders
  }

  public async findAndCount(
    options: IPaginationOptionsDTO,
  ): Promise<[OrdersStatus[], number]> {
    const orders = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
    })

    return orders
  }

  public async findById(id: string): Promise<OrdersStatus | null> {
    const findOrder = await this.ormRepository.findOne({
      where: { id },
    })

    return findOrder
  }
}

export default OrderStatusRepository
