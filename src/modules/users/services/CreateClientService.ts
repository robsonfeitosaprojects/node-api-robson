import { injectable, inject } from 'tsyringe'
import IClientRepository from '../repositories/IClientRepository'
import ICreateClientDTO from '../dtos/ICreateClientDTO'

@injectable()
class CreateClientService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository,
  ) {}

  public async execute(data: ICreateClientDTO): Promise<void> {
    await this.clientRepository.create(data)
  }
}

export default CreateClientService
