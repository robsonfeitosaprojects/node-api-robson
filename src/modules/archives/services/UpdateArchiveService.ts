import { injectable, inject } from 'tsyringe'

import Archive from '../infra/typeorm/entities/Archive'
import IArchiveRepository from '../repositories/IArchiveRepository'
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider'
import AppError from '@shared/errors/AppError'

interface IRequest {
  file: File
  archiveId: string
  payload?: {
    originName?: string
    referenceId?: string
    isPrimary?: boolean
  }
}

@injectable()
class UpdateArchiveService {
  constructor(
    @inject('ArchiveRepository')
    private archiveRepository: IArchiveRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute(data: IRequest): Promise<Archive> {
    const { archiveId, file, payload } = data

    const archive = await this.archiveRepository.findById(archiveId)

    if (!archive) {
      throw new AppError('Archive not found')
    }

    await this.storageProvider.deleteFile(archive.name)

    const filename = (file as any).filename as string

    const createFile = await this.storageProvider.saveFile(filename)

    archive.name = createFile
    archive.size = String(file.size)

    if (payload?.referenceId) {
      archive.reference_id = payload.referenceId
    }
    archive.type = file.type
    if (payload?.originName) {
      archive.origin_target = payload.originName
    }
    if (payload?.isPrimary) {
      archive.is_primary = payload.isPrimary
    }

    await this.archiveRepository.save(archive)

    return archive
  }
}

export default UpdateArchiveService
