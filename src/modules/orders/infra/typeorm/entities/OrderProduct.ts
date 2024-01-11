import {
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm'

import Order from '@modules/orders/infra/typeorm/entities/Order'
import Product from '@modules/products/infra/typeorm/entities/Product'

@Entity('or100_pr100_order_product')
class OrderProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Product, (product) => product.orders_products, {
    eager: true,
  })
  @JoinColumn({ name: 'product_id' })
  product: Product

  @ManyToOne(() => Order, (order) => order.orders_products)
  @JoinColumn({ name: 'order_id' })
  order: Order

  @Column()
  quantity: number
}

export default OrderProduct
