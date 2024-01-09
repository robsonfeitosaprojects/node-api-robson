import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  Column,
  OneToMany,
} from 'typeorm'

import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts'
import User from '@modules/users/infra/typeorm/entities/User'
import Address from '@modules/users/infra/typeorm/entities/Address'
import OrdersStatus from './OrdersStatus'
import Schedule from '@modules/schedule/infra/typeorm/entities/Schedule'

@Entity('or100_orders')
class Orders {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('uuid')
  user_id: string

  @OneToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User

  @OneToOne(() => Address, { eager: true, nullable: true })
  @JoinColumn({ name: 'address_id' })
  address: Address

  @Column()
  cod_order: string

  @Column()
  professional: string

  @OneToMany(() => OrdersStatus, (orderStatus) => orderStatus.order, {
    eager: true,
    cascade: true,
  })
  status: OrdersStatus

  @Column()
  coupon_applied: string

  @Column()
  freight: string

  @Column()
  payment_method: string

  @Column()
  amount: number

  @Column()
  type_product: string

  @Column()
  tracking_code: string

  @OneToMany(() => OrdersProducts, (ordersProducts) => ordersProducts.order, {
    eager: true,
    cascade: true,
  })
  orders_products: OrdersProducts[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Orders
