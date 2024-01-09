import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO'
import { StatusPayment } from '@modules/orders/services/CreateOrderStatusService'
import Address from '@modules/users/infra/typeorm/entities/Address'
import User from '@modules/users/infra/typeorm/entities/User'

interface OrdersStatus {
  name: StatusPayment
  order_id: string
}

export const orderData: ICreateOrderDTO[] = [
  {
    tracking_code: 'PC123456789BR',
    coupon_applied: JSON.stringify({
      coupon: '4DK5S7P',
      discount: 15,
    }),
    freight: JSON.stringify({
      name: 'PAC',
      value: 55,
    }),
    products: [],
    payment_method: 'pix',
    cod_order: '1DKQJ7P',
    type_product: 'product',
    amount: 8500,
    user: {} as User,
    address: {} as Address,
  },
  {
    tracking_code: 'PC123456789BR',
    freight: JSON.stringify({
      name: 'PAC',
      value: 22.5,
    }),
    products: [],
    payment_method: 'pix',
    cod_order: 'GA484K2',
    type_product: 'product',
    amount: 1200,
    user: {} as User,
    address: {} as Address,
  },
  {
    tracking_code: 'PC123456789BR',
    freight: JSON.stringify({
      name: 'PAC',
      value: 35.5,
    }),
    products: [],
    payment_method: 'pix',
    type_product: 'product',
    cod_order: 'OL22LKO',
    amount: 1400,
    user: {} as User,
    address: {} as Address,
  },
]

export const ordersStatusData: OrdersStatus[] = [
  {
    name: 'awaiting_payment',
    order_id: '',
  },
  {
    name: 'awaiting_shipment',
    order_id: '',
  },
  {
    name: 'awaiting_pickup',
    order_id: '',
  },
  {
    name: 'shiped',
    order_id: '',
  },
  {
    name: 'completed',
    order_id: '',
  },
]
