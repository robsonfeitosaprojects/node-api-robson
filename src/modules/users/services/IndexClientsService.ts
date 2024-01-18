import { injectable, inject } from 'tsyringe'
import IPaginationOptionsDTO from '@modules/dtos/IPaginationOptionsDTO'
import Client from '../infra/typeorm/entities/Client'
import IClientRepository from '../repositories/IClientRepository'

@injectable()
class IndexClientsService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository,
  ) {}

  public async execute(
    options: IPaginationOptionsDTO,
  ): Promise<[Client[], number]> {
    const clients = await this.clientRepository.findAndCount(options)

    return clients
  }
}

export default IndexClientsService
