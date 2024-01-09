import { injectable, inject } from 'tsyringe'

import Archive from '../infra/typeorm/entities/Archive'
import IArchiveRepository from '../repositories/IArchiveRepository'
import IPaginationOptionsDTO from '@modules/dtos/IPaginationOptionsDTO'

@injectable()
class IndexArchiveService {
  constructor(
    @inject('ArchiveRepository')
    private archiveRepository: IArchiveRepository,
  ) {}

  public async execute(
    option: IPaginationOptionsDTO,
    originName?: string | undefined,
    referenceId?: string | undefined,
  ): Promise<[Archive[], number]> {
    const archives = await this.archiveRepository.findAndCount(
      option,
      originName,
      referenceId,
    )

    return archives
  }
}

export default IndexArchiveService
