import { injectable, inject } from 'tsyringe'

import Archive from '../infra/typeorm/entities/Archive'
import IArchiveRepository from '../repositories/IArchiveRepository'

interface IRequest {
  referenceId: string
  archiveId: string
}

@injectable()
class UpdatePrimaryArchiveService {
  constructor(
    @inject('ArchiveRepository')
    private archiveRepository: IArchiveRepository,
  ) {}

  public async execute({
    referenceId,
    archiveId,
  }: IRequest): Promise<Archive[]> {
    const archives =
      await this.archiveRepository.findAllByReferenceId(referenceId)

    for (const archive of archives) {
      await this.archiveRepository.save(archive)
    }

    return archives
  }
}

export default UpdatePrimaryArchiveService
