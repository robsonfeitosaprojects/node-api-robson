import Orders from '@modules/orders/infra/typeorm/entities/Order'
import Professional from '@modules/users/infra/typeorm/entities/Professional'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm'

@Entity('sc100_schedulings')
class Schedule {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  date: Date

  @OneToOne(() => Professional, { eager: true })
  @JoinColumn({ name: 'professional_id' })
  professional: Professional

  @OneToOne(() => Orders, { eager: true, nullable: true })
  @JoinColumn({ name: 'order_id' })
  order: Orders

  @Column()
  name: string

  @Column()
  observations: string
}

export default Schedule
