import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import User from '@modules/users/infra/typeorm/entities/User'
import {
  settingsProfessionalData,
  usersProfessionalData,
} from './data/professional-data'
import Team from '@modules/users/infra/typeorm/entities/Team'
import { teamData } from './data/teams-data'
import Professional from '@modules/users/infra/typeorm/entities/Professional'
import Product from '@modules/products/infra/typeorm/entities/Product'
import ProductsTeams from '@modules/users/infra/typeorm/entities/ProductsTeams'

export default class TeamsDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const professionals = await connection
      .getRepository(Professional)
      .createQueryBuilder('pr100_professional')
      .getMany()

    const services = await connection
      .getRepository(Product)
      .createQueryBuilder('pd100_products')
      .where('pd100_products.type = :type', { type: 'service' })
      .getMany()

    const userMaster = await connection
      .getRepository(User)
      .createQueryBuilder('users')
      .leftJoinAndSelect('users.settings', 'settings')
      .where('settings.level = :level', { level: '1' })
      .getMany()

    const servicesIds = services.map((c) => c.id)
    // console.log({ servicesIds })
    // console.log({ professionals, services, userMaster })

    const { raw: teams } = await connection
      .createQueryBuilder()
      .insert()
      .into(Team)
      .values(
        teamData.map((team, index) => {
          return {
            ...team,
            user_id: userMaster[0].id,
          }
        }),
      )
      .execute()

    // console.log({ teams })

    const teamsProducts = teams.map((team: any, index: any) => {
      const newTeamProduct = { product_id: '', team_id: team.id }
      if (index === 0) {
        newTeamProduct.product_id = services[0].id
      }
      if (index === 1) {
        newTeamProduct.product_id = services[1].id
      }
      if (index === 2) {
        newTeamProduct.product_id = services[2].id
      }
      if (index === 3) {
        newTeamProduct.product_id = services[4].id
      }
      if (index === 4) {
        newTeamProduct.product_id = services[5].id
      }
      if (index === 5) {
        newTeamProduct.product_id = services[6].id
      }
      if (index === 6) {
        newTeamProduct.product_id = services[7].id
      }
      if (index === 7) {
        newTeamProduct.product_id = services[8].id
      }
      if (index === 8) {
        newTeamProduct.product_id = services[9].id
      }

      return newTeamProduct
    })
    // console.log({ teamsProducts })
    const { raw: productsTeams } = await connection
      .createQueryBuilder()
      .insert()
      .into(ProductsTeams)
      .values(teamsProducts)
      .execute()
  }
}
