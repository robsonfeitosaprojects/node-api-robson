import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import BCryptHashProvider from '@modules/users/providers/HashProvider/implementations/BCryptHashProvider'
import { container } from 'tsyringe'
import Team from '@modules/users/infra/typeorm/entities/Team'
import Coupon from '@modules/products/infra/typeorm/entities/Coupon'
import { couponsData } from './data/coupons-data'

const hashProvider = container.resolve(BCryptHashProvider)

export default class CouponsDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Coupon)
      .values(couponsData)
      .execute()
  }
}
