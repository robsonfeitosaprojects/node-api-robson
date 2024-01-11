import OrderProduct from '../infra/typeorm/entities/OrderProduct'

export type ICrateOrderProductDTO = Omit<OrderProduct, 'id'>
