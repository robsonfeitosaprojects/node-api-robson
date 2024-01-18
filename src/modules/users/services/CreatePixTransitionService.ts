import { injectable, inject } from 'tsyringe'

import UserTransactions from '../infra/typeorm/entities/UserTransactions'
import IUserTransactionsRepository from '../repositories/IUserTransactionsRepository'
import ICreateUserTransactionsDTO from '../dtos/ICreateUserTransactionsDTO'
import { ICreateTransactionPixDTO } from '../dtos/ICreateTransactionPixDTO'

interface IRequest {
  data: ICreateTransactionPixDTO
}

@injectable()
class CreatePixTransactionService {
  constructor() {}

  public async execute({ data }: IRequest): Promise<UserTransactions> {
    console.log({ data })

    return {} as UserTransactions
  }
}

export default CreatePixTransactionService
