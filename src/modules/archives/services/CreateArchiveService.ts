import { injectable, inject } from 'tsyringe'

import Archive from '../infra/typeorm/entities/Archive'
import IArchiveRepository from '../repositories/IArchiveRepository'
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider'
import AppError from '@shared/errors/AppError'

interface IRequest {
  files: File[]
  referenceId: string
  originName: string
}

@injectable()
class CreateArchiveService {
  constructor(
    @inject('ArchiveRepository')
    private archiveRepository: IArchiveRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute(data: IRequest): Promise<Archive[]> {
    const { originName, referenceId } = data
    const { files } = data
    if (files.length >= 8) {
      throw new AppError('exceeded the maximum number allowed, 8 files ')
    }

    const archivesReference =
      await this.archiveRepository.findAllByReferenceId(referenceId)

    for (const archive of archivesReference) {
      archive.is_primary = false
      await this.archiveRepository.save(archive)
    }

    const archives: Archive[] = []
    for (const file of files) {
      const filename = (file as any).filename as string

      const createFile = await this.storageProvider.saveFile(filename)

      const archive = await this.archiveRepository.create({
        name: createFile,
        reference_id: referenceId,
        origin_target: originName,
        size: String(file.size),
        type: (file as any).mimetype,
        is_primary: false,
      })

      archives.push(archive)
    }
    return archives
  }
}

export default CreateArchiveService
