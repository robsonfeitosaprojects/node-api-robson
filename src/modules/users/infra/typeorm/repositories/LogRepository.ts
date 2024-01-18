import { ILike, Repository } from 'typeorm'

import dataSource from '@shared/infra/typeorm'
import IPaginationOptionsDTO from '@modules/dtos/IPaginationOptionsDTO'

import ILogRepository from '@modules/users/repositories/ILogRepository'
import ICreateLogDTO from '@modules/users/dtos/ICreateLogDTO'
import Log from '../entities/Log'

class LogRepository implements ILogRepository {
  private ormRepository: Repository<Log>

  constructor() {
    this.ormRepository = dataSource.getRepository(Log)
  }

  public async create(data: ICreateLogDTO): Promise<Log> {
    const log = this.ormRepository.create(data)

    await this.ormRepository.save(log)

    return log
  }

  public async findById(id: string): Promise<Log | null> {
    const log = await this.ormRepository.findOne({
      where: {
        id,
      },
    })

    return log
  }

  public async findAndCount(
    options: IPaginationOptionsDTO,
  ): Promise<[Log[], number]> {
    const users = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      order: {
        created_at: 'DESC',
      },
    })

    return users
  }

  public async delete(name: string): Promise<void> {
    const logs = await this.ormRepository.find({
      where: {
        ip: ILike(`%${name}%`),
      },
    })

    if (logs) {
      for (const log of logs) {
        this.ormRepository.remove(log)
      }
    }
  }

  public async save(data: Log): Promise<Log> {
    return this.ormRepository.save(data)
  }
}

export default LogRepository
