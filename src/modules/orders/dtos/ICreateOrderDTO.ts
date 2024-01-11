import OrdersStatus from '../infra/typeorm/entities/OrdersStatus'
import Orders from '../infra/typeorm/entities/Order'

export default interface ICreateOrderDTO
  extends Omit<
    Orders,
    | 'id'
    | 'orders_products'
    | 'user_id'
    | 'status'
    | 'coupon_applied'
    | 'freight'
    | 'tracking_code'
    | 'created_at'
    | 'updated_at'
  > {
  address_id?: string
  professional_id?: string
  coupon_applied?: string
  tracking_code?: string
  freight?: string
}

export type ICreateOrderStatusDTO = Omit<
  OrdersStatus,
  'id' | 'created_at' | 'updated_at'
>
