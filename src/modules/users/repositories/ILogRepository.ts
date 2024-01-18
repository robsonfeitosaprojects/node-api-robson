import Log from '../infra/typeorm/entities/Log'

import IPaginationOptionsDTO from '../../dtos/IPaginationOptionsDTO'
import ICreateLogDTO from '../dtos/ICreateLogDTO'

export default interface ILogRepository {
  findById(id: string): Promise<Log | null>
  findAndCount(options: IPaginationOptionsDTO): Promise<[Log[], number]>
  create(data: ICreateLogDTO): Promise<Log>
  delete(id: string): Promise<void>
  save(data: Log): Promise<Log>
}
