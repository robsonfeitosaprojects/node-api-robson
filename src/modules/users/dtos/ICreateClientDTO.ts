import Client from '../infra/typeorm/entities/Client'

type ICreateClientDTO = Omit<Client, 'id' | 'created_at' | 'updated_at'>

export default ICreateClientDTO
