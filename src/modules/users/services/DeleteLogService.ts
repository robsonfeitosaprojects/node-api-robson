import { injectable, inject } from 'tsyringe'
import ILogRepository from '../repositories/ILogRepository'

@injectable()
class DeleteLogsService {
  constructor(
    @inject('LogRepository')
    private logRepository: ILogRepository,
  ) {}

  public async execute(name: string): Promise<void> {
    console.log({ name })
    await this.logRepository.delete(name)
  }
}

export default DeleteLogsService
