import { Repository } from 'typeorm'

import dataSource from '@shared/infra/typeorm'
import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository'
import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO'
import Order from '../entities/Order'
import IPaginationOptionsDTO from '@modules/dtos/IPaginationOptionsDTO'

class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>

  constructor() {
    this.ormRepository = dataSource.getRepository(Order)
  }

  public async create(payload: ICreateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create(payload)

    await this.ormRepository.save(order)

    return order
  }

  public async findAndCountByUser(
    userId: string,
    options: IPaginationOptionsDTO,
  ): Promise<[Order[], number]> {
    const orders = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      where: {
        user_id: userId,
      },
    })

    return orders
  }

  public async findAndCount(
    options: IPaginationOptionsDTO,
  ): Promise<[Order[], number]> {
    const orders = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      order: {
        created_at: 'DESC',
      },
      relations: ['orders_products'],
    })

    return orders
  }

  public async findById(id: string): Promise<Order | null> {
    const findOrder = await this.ormRepository.findOne({
      where: { id },
    })

    return findOrder
  }

  public async save(order: Order): Promise<Order> {
    return this.ormRepository.save(order)
  }
}

export default OrdersRepository
