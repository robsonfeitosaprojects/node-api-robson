import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm'
import Team from './Team'
import User from './User'
import TimeIntervals from './TimeIntervals'

@Entity('pr100_professional')
class Professional {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  user_id?: string

  @OneToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user?: User

  @Column({ nullable: true })
  team_id?: string | null

  @ManyToOne(() => Team, (team) => team.professional, {
    eager: true,
  })
  @JoinColumn({ name: 'team_id' })
  team?: Team

  @OneToMany(() => TimeIntervals, (timeInterval) => timeInterval.professional, {
    eager: true,
  })
  timeIntervals?: TimeIntervals[]

  @Column()
  function: string

  @Column()
  name: string

  @Column({ nullable: true })
  invite?: string

  @Column()
  actived: boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Professional
