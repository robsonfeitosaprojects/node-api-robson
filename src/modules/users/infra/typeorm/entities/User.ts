import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm'

import { Exclude } from 'class-transformer'
import UserSettings from './UserSettings'
@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  @Exclude()
  password: string

  @Column()
  @Exclude()
  settings_id: string

  @OneToOne(() => UserSettings, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'settings_id' })
  settings: UserSettings
}

export default User
