import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('logs')
class Log {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  ip: string

  @Column()
  action: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Log
