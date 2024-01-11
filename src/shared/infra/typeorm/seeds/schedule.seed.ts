import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import Schedule from '@modules/schedule/infra/typeorm/entities/Schedule'
import Professional from '@modules/users/infra/typeorm/entities/Professional'
import { scheduleData } from './data/schedule-data'
import Orders from '@modules/orders/infra/typeorm/entities/Order'

export default class ScheduleDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const professionals = await connection
      .getRepository(Professional)
      .createQueryBuilder('pr100_professional')
      .getMany()

    const orders = await connection
      .getRepository(Orders)
      .createQueryBuilder('or100_orders')
      .getMany()

    await connection
      .createQueryBuilder()
      .insert()
      .into(Schedule)
      .values(
        scheduleData.map((schedule, index: number) => {
          if (index === 0) {
            schedule.professional = professionals[0]
            schedule.order = orders[3]
          }

          if (index === 1) {
            schedule.professional = professionals[1]
            schedule.order = orders[4]
          }

          if (index === 2) {
            schedule.professional = professionals[2]
            schedule.order = orders[5]
          }

          if (index === 3) {
            schedule.professional = professionals[3]
            schedule.order = orders[6]
          }

          if (index === 4) {
            schedule.professional = professionals[4]
            schedule.order = orders[7]
          }

          return schedule
        }),
      )
      .execute()
  }
}
