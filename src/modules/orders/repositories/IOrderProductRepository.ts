import { ICrateOrderProductDTO } from '../dtos/ICrateOrderProductDTO'
import OrderProduct from '../infra/typeorm/entities/OrderProduct'

export default interface IOrderProductRepository {
  create(data: ICrateOrderProductDTO): Promise<OrderProduct>
  findById(id: string): Promise<OrderProduct | null>
  save(order: OrderProduct): Promise<OrderProduct>
}
