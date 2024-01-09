import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import User from '@modules/users/infra/typeorm/entities/User'
import {
  professionalData,
  settingsProfessionalData,
  usersProfessionalData,
} from './data/professional-data'
import UserSettings from '@modules/users/infra/typeorm/entities/UserSettings'
import Professional from '@modules/users/infra/typeorm/entities/Professional'
import BCryptHashProvider from '@modules/users/providers/HashProvider/implementations/BCryptHashProvider'
import { container } from 'tsyringe'
import Team from '@modules/users/infra/typeorm/entities/Team'
import ProductWish from '@modules/products/infra/typeorm/entities/ProductWish'
import Product from '@modules/products/infra/typeorm/entities/Product'

const hashProvider = container.resolve(BCryptHashProvider)

function getTeamId(teams: Team[], name: string) {
  const team = teams.find((t) => name === t.name)

  if (!team) {
    return ''
  }

  return team.id
}

const wishes = Array.from({ length: 10 }, (_, i) => i)

export default class WishDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const products = await connection
      .getRepository(Product)
      .createQueryBuilder('pd100_product')
      .getMany()

    const userMaster = await connection
      .getRepository(User)
      .createQueryBuilder('users')
      .leftJoinAndSelect('users.settings', 'settings')
      .where('settings.level = :level', { level: '1' })
      .getMany()

    await connection
      .createQueryBuilder()
      .insert()
      .into(ProductWish)
      .values(
        wishes.map((index) => ({
          user_id: userMaster[0].id,
          product_id: products[index].id,
        })),
      )
      .execute()
  }
}
