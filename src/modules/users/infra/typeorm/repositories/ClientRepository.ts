import { Repository } from 'typeorm'

import dataSource from '@shared/infra/typeorm'
import IPaginationOptionsDTO from '@modules/dtos/IPaginationOptionsDTO'

import IClientRepository from '@modules/users/repositories/IClientRepository'
import ICreateClientDTO from '@modules/users/dtos/ICreateClientDTO'
import Client from '../entities/Client'

class ClientRepository implements IClientRepository {
  private ormRepository: Repository<Client>

  constructor() {
    this.ormRepository = dataSource.getRepository(Client)
  }

  public async create(data: ICreateClientDTO): Promise<Client> {
    const client = this.ormRepository.create(data)

    await this.ormRepository.save(client)

    return client
  }

  public async findById(id: string): Promise<Client | null> {
    const client = await this.ormRepository.findOne({
      where: {
        id,
      },
    })

    return client
  }

  public async findAndCount(
    options: IPaginationOptionsDTO,
  ): Promise<[Client[], number]> {
    const clients = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      order: {
        created_at: 'DESC',
      },
    })

    return clients
  }

  public async delete(id: string): Promise<void> {
    const client = await this.ormRepository.findOne({
      where: {
        id,
      },
    })

    if (client) {
      this.ormRepository.remove(client)
    }
  }

  public async save(data: Client): Promise<Client> {
    return this.ormRepository.save(data)
  }
}

export default ClientRepository
