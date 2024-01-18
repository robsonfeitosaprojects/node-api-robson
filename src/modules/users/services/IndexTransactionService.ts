import { injectable, inject } from 'tsyringe'

import IPaginationOptionsDTO from '../../dtos/IPaginationOptionsDTO'
import IUserTransactionsRepository from '../repositories/IUserTransactionsRepository'
import UserTransaction from '../infra/typeorm/entities/UserTransactions'

@injectable()
class IndexTransactionService {
  constructor(
    @inject('UserTransactionsRepository')
    private userTransactionsRepository: IUserTransactionsRepository,
  ) {}

  public async execute(
    options: IPaginationOptionsDTO,
  ): Promise<[UserTransaction[], number]> {
    const transactions =
      await this.userTransactionsRepository.findAndCount(options)

    return transactions
  }
}

export default IndexTransactionService
