import { Repository } from 'typeorm'
import dataSource from '@shared/infra/typeorm'
import OrderProduct from '../entities/OrderProduct'
import { ICrateOrderProductDTO } from '@modules/orders/dtos/ICrateOrderProductDTO'
import IOrderProductRepository from '@modules/orders/repositories/IOrderProductRepository'

class OrderProductRepository implements IOrderProductRepository {
  private ormRepository: Repository<OrderProduct>

  constructor() {
    this.ormRepository = dataSource.getRepository(OrderProduct)
  }

  public async create(payload: ICrateOrderProductDTO): Promise<OrderProduct> {
    const order = this.ormRepository.create(payload)

    await this.ormRepository.save(order)

    return order
  }

  public async findById(id: string): Promise<OrderProduct | null> {
    const findOrder = await this.ormRepository.findOne({
      where: { id },
    })

    return findOrder
  }

  public async save(order: OrderProduct): Promise<OrderProduct> {
    return this.ormRepository.save(order)
  }
}

export default OrderProductRepository
