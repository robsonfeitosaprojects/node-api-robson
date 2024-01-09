import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinColumn,
} from 'typeorm'
import Product from '@modules/products/infra/typeorm/entities/Product'
import Team from './Team'

@Entity('te100_pd100_team_product')
class ProductsTeams {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('uuid')
  product_id: string

  @Column('uuid')
  team_id: string

  @ManyToMany(() => Product, (product) => product.team)
  @JoinColumn({ name: 'product_id' })
  product: Product

  @ManyToMany(() => Team, (team) => team.products)
  @JoinColumn({ name: 'team_id' })
  team: Team
}

export default ProductsTeams
