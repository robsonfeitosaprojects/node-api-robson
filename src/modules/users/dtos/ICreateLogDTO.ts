import Log from '../infra/typeorm/entities/Log'

type ICreateLogDTO = Omit<Log, 'id' | 'created_at' | 'updated_at'>

export default ICreateLogDTO
