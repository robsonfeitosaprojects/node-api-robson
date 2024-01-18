import { Exclude } from 'class-transformer'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm'
import User from './User'

@Entity('user_transactions')
class UserTransaction {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  amount: number

  @Column()
  status: string

  @Column()
  payment_method: string

  @Exclude()
  @Column()
  user_id: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column()
  brand: string

  @Column()
  tid: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default UserTransaction
