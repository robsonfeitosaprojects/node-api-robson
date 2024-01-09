import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  Column,
  ManyToOne,
} from 'typeorm'

import Order from './Order'

@Entity('or102_orders_status')
class OrdersStatus {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  order_id: string

  @ManyToOne(() => Order, (order) => order.status)
  @JoinColumn({ name: 'order_id' })
  order: Order

  @Column()
  name: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default OrdersStatus
