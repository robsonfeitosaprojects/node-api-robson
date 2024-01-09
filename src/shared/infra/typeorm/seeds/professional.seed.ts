import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import User from '@modules/users/infra/typeorm/entities/User'
import {
  professionalData,
  settingsProfessionalData,
  timeIntervals,
  usersProfessionalData,
} from './data/professional-data'
import UserSettings from '@modules/users/infra/typeorm/entities/UserSettings'
import Professional from '@modules/users/infra/typeorm/entities/Professional'
import BCryptHashProvider from '@modules/users/providers/HashProvider/implementations/BCryptHashProvider'
import { container } from 'tsyringe'
import Team from '@modules/users/infra/typeorm/entities/Team'
import TimeIntervals from '@modules/users/infra/typeorm/entities/TimeIntervals'

const hashProvider = container.resolve(BCryptHashProvider)

function getTeamId(teams: Team[], name: string) {
  const team = teams.find((t) => name === t.name)

  if (!team) {
    return ''
  }

  return team.id
}

export default class ProfessionalDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const { raw: settings } = await connection
      .createQueryBuilder()
      .insert()
      .into(UserSettings)
      .values(settingsProfessionalData)
      .execute()

    const hashedPassword = await hashProvider.generateHash('123123')
    const { raw: users } = await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(
        usersProfessionalData.map((u, index) => ({
          ...u,
          settings_id: settings[index].id,
          password: hashedPassword,
        })),
      )
      .execute()

    const teams = await connection
      .getRepository(Team)
      .createQueryBuilder('te100_team')
      .getMany()

    const { raw: professionais } = await connection
      .createQueryBuilder()
      .insert()
      .into(Professional)
      .values(
        professionalData.map((professional, index) => {
          if ([0, 1].includes(index)) {
            professional.team_id = getTeamId(teams, 'Mecânicos')
          }

          if ([2, 3].includes(index)) {
            professional.team_id = getTeamId(teams, 'Cabelereiros')
          }

          if ([4].includes(index)) {
            professional.team_id = getTeamId(teams, 'Técnicos em informática')
          }

          if ([5].includes(index)) {
            professional.team_id = getTeamId(teams, 'Técnicos em seguranća')
          }

          if ([6].includes(index)) {
            professional.team_id = getTeamId(teams, 'Maquiadoras')
          }

          if ([7].includes(index)) {
            professional.team_id = getTeamId(teams, 'Dentistas')
          }

          if ([8, 9].includes(index)) {
            professional.team_id = getTeamId(teams, 'Jardineiros')
          }

          if ([10].includes(index)) {
            professional.team_id = getTeamId(teams, 'Vendedores')
          }

          return {
            ...professional,
            user_id: users[index].id,
          }
        }),
      )
      .execute()

    for (const professional of professionais) {
      await connection
        .createQueryBuilder()
        .insert()
        .into(TimeIntervals)
        .values(
          timeIntervals.map((interval) => ({
            ...interval,
            professional_id: professional.id,
          })),
        )
        .execute()
    }
  }
}
