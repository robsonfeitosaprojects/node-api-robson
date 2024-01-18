import { container } from 'tsyringe'

import '@modules/users/providers'
import './providers'

import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'

import IUserSettingsRepository from '@modules/users/repositories/IUserSettingsRepository'
import UserSettingsRepository from '@modules/users/infra/typeorm/repositories/UserSettingsRepository'

import IUsersTokensRepository from '@modules/users/repositories/IUserTokensRepository'
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository'
import ILogRepository from '@modules/users/repositories/ILogRepository'
import LogRepository from '@modules/users/infra/typeorm/repositories/LogRepository'
import IClientRepository from '@modules/users/repositories/IClientRepository'
import ClientRepository from '@modules/users/infra/typeorm/repositories/ClientRepository'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)

container.registerSingleton<IUserSettingsRepository>(
  'UserSettingsRepository',
  UserSettingsRepository,
)

container.registerSingleton<IUsersTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
)

container.registerSingleton<ILogRepository>('LogRepository', LogRepository)

container.registerSingleton<IClientRepository>(
  'ClientRepository',
  ClientRepository,
)
