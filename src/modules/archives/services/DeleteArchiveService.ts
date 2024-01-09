import { injectable, inject } from 'tsyringe'

import IArchiveRepository from '../repositories/IArchiveRepository'
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider'
import AppError from '@shared/errors/AppError'

interface IRequest {
  archiveId: string
}

@injectable()
class DeleteArchiveService {
  constructor(
    @inject('ArchiveRepository')
    private archiveRepository: IArchiveRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ archiveId }: IRequest): Promise<void> {
    const archive = await this.archiveRepository.findById(archiveId)

    if (!archive) {
      throw new AppError('Archive not exist')
    }

    await this.storageProvider.deleteFile(archive.name)

    await this.archiveRepository.delete(archiveId)
  }
}

export default DeleteArchiveService
