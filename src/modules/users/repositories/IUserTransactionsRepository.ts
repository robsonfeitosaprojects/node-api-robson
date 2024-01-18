import UserTransaction from '../infra/typeorm/entities/UserTransactions'

import ICreateUserTransactionsDTO from '../dtos/ICreateUserTransactionsDTO'
import IPaginationOptionsDTO from '../../dtos/IPaginationOptionsDTO'

interface IFindAllTransaction {
  data: ICreateUserTransactionsDTO[]
  total: number
}

export default interface ITransactionsUserRepository {
  create(transactionsData: ICreateUserTransactionsDTO): Promise<UserTransaction>
  findById(id: string): Promise<UserTransaction | null>
  findAndCount(
    optoins: IPaginationOptionsDTO,
  ): Promise<[UserTransaction[], number]>
  save(transactionsData: UserTransaction): Promise<UserTransaction>
}
