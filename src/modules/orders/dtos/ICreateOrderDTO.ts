import Address from '@modules/users/infra/typeorm/entities/Address'
import User from '@modules/users/infra/typeorm/entities/User'
import OrdersStatus from '../infra/typeorm/entities/OrdersStatus'

interface IProduct {
  product_name: string
  product_id: string
  price: number
  quantity: number
}

export default interface ICreateOrderDTO {
  user: User
  address: Address | null
  products: IProduct[]
  cod_order: string
  payment_method: string
  amount: number
  type_product: string
  professional?: string
  tracking_code?: string
  coupon_applied?: string
  freight?: string
}

export type ICreateOrderStatusDTO = Omit<
  OrdersStatus,
  'id' | 'created_at' | 'updated_at'
>
