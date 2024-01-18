import { injectable, inject } from 'tsyringe'
import ILogRepository from '../repositories/ILogRepository'
import ICreateLogDTO from '../dtos/ICreateLogDTO'

@injectable()
class CreateLogService {
  constructor(
    @inject('LogRepository')
    private logRepository: ILogRepository,
  ) {}

  public async execute(data: ICreateLogDTO): Promise<void> {
    await this.logRepository.create(data)
  }
}

export default CreateLogService
