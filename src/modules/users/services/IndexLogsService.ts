import { injectable, inject } from 'tsyringe'
import ILogRepository from '../repositories/ILogRepository'
import Log from '../infra/typeorm/entities/Log'
import IPaginationOptionsDTO from '@modules/dtos/IPaginationOptionsDTO'

@injectable()
class IndexLogsService {
  constructor(
    @inject('LogRepository')
    private logRepository: ILogRepository,
  ) {}

  public async execute(
    options: IPaginationOptionsDTO,
  ): Promise<[Log[], number]> {
    const logs = await this.logRepository.findAndCount(options)

    return logs
  }
}

export default IndexLogsService
