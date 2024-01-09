import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm'

import { Exclude } from 'class-transformer'
import UserSettings from './UserSettings'
import UserComments from './UserComments'
import ProductWish from '@modules/products/infra/typeorm/entities/ProductWish'

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

  // @OneToMany(() => UserComments, (comment) => comment.user)
  // comment: UserComments[]

  @OneToMany(() => ProductWish, (wish) => wish.user)
  wishes: ProductWish[]
}

export default User
