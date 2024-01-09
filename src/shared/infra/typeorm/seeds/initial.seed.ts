import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import User from '@modules/users/infra/typeorm/entities/User'
import UserSettings from '@modules/users/infra/typeorm/entities/UserSettings'
import { container } from 'tsyringe'
import BCryptHashProvider from '@modules/users/providers/HashProvider/implementations/BCryptHashProvider'

const hashProvider = container.resolve(BCryptHashProvider)

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const setting = await factory(UserSettings)().create()

    const hashedPassword = await hashProvider.generateHash('123123')

    await factory(User)().create({
      settings: setting,
      password: hashedPassword,
    })
  }
}
