import User from '../infra/typeorm/entities/User'

import ICreateUserDTO from '../dtos/ICreateUserDTO'
import IPaginationOptionsDTO from '../../dtos/IPaginationOptionsDTO'

interface IFindAllUser {
  data: User[]
  total: number
}

export default interface IUsersRepository {
  findById(id: string): Promise<User | null>
  findByIds(ids: string[]): Promise<User[]>
  findByEmail(email: string): Promise<User | null>
  findAndCount(options: IPaginationOptionsDTO): Promise<[User[], number]>
  create(userData: ICreateUserDTO): Promise<User>
  delete(id: string): Promise<void>
  save(user: User): Promise<User>
}
