import { injectable, inject } from 'tsyringe'
import ILogRepository from '../repositories/ILogRepository'

@injectable()
class DeleteLogsService {
  constructor(
    @inject('LogRepository')
    private logRepository: ILogRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    await this.logRepository.delete(id)
  }
}

export default DeleteLogsService
