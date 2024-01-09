import IPaginationOptionsDTO from '@modules/dtos/IPaginationOptionsDTO'
import Archive from '../infra/typeorm/entities/Archive'
import { ICreateArchiveDTO } from '../dtos/ICreateArchiveDTO'

export default interface IArchiveRepository {
  create(data: ICreateArchiveDTO): Promise<Archive>
  findById(id: string): Promise<Archive | null>
  findByName(name: string): Promise<Archive | null>
  findAndCount(
    options: IPaginationOptionsDTO,
    originName?: string,
    referenceId?: string,
  ): Promise<[Archive[], number]>
  findAllByReferenceId(id: string): Promise<Archive[]>
  delete(id: string): Promise<void>
  save(archive: Archive): Promise<Archive>
}
