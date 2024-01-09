import { Repository } from 'typeorm'

import dataSource from '@shared/infra/typeorm'
import IPaginationOptionsDTO from '@modules/dtos/IPaginationOptionsDTO'
import IArchiveRepository from '@modules/archives/repositories/IArchiveRepository'
import Archive from '../entities/Archive'
import { ICreateArchiveDTO } from '@modules/archives/dtos/ICreateArchiveDTO'

class ArchiveRepository implements IArchiveRepository {
  private ormRepository: Repository<Archive>

  constructor() {
    this.ormRepository = dataSource.getRepository(Archive)
  }

  public async create(data: ICreateArchiveDTO): Promise<Archive> {
    const archive = this.ormRepository.create(data)

    await this.ormRepository.save(archive)

    return archive
  }

  public async findById(id: string): Promise<Archive | null> {
    const archive = await this.ormRepository.findOne({
      where: { id },
    })

    return archive
  }

  public async findByName(name: string): Promise<Archive | null> {
    const archive = await this.ormRepository.findOne({
      where: {
        name,
      },
    })

    return archive
  }

  public async findAllByReferenceId(id: string): Promise<Archive[]> {
    const archives = await this.ormRepository.find({
      where: {
        reference_id: id,
      },
    })

    return archives
  }

  public async findAndCount(
    options: IPaginationOptionsDTO,
    originName?: string,
    referenceId?: string,
  ): Promise<[Archive[], number]> {
    const archive = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      where: [{ reference_id: referenceId }, { origin_target: originName }],
    })

    return archive
  }

  public async delete(id: string): Promise<void> {
    const archive = await this.ormRepository.findOne({
      where: {
        id,
      },
    })

    if (archive) {
      this.ormRepository.remove(archive)
    }
  }

  public async save(archive: Archive): Promise<Archive> {
    return this.ormRepository.save(archive)
  }
}

export default ArchiveRepository
