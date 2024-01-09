import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import BCryptHashProvider from '@modules/users/providers/HashProvider/implementations/BCryptHashProvider'
import { container } from 'tsyringe'
import Address from '@modules/users/infra/typeorm/entities/Address'
import { addressData } from './data/address-data'
import User from '@modules/users/infra/typeorm/entities/User'

export default class AddressDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const userMaster = await connection
      .getRepository(User)
      .createQueryBuilder('users')
      .leftJoinAndSelect('users.settings', 'settings')
      .where('settings.level = :level', { level: '1' })
      .getMany()

    await connection
      .createQueryBuilder()
      .insert()
      .into(Address)
      .values(addressData.map((a) => ({ ...a, user: userMaster[0] })))
      .execute()
  }
}
