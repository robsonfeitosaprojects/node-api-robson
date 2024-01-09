import { Repository } from 'typeorm'

import IAddressRepository from '@modules/users/repositories/IAddressRepository'
import dataSource from '@shared/infra/typeorm'

import Address from '../entities/Address'
import IPaginationOptionsDTO from '@modules/dtos/IPaginationOptionsDTO'
import ICreateAddressDTO from '@modules/users/dtos/ICreateAddressDTO'

class AddressRepository implements IAddressRepository {
  private ormRepository: Repository<Address>

  constructor() {
    this.ormRepository = dataSource.getRepository(Address)
  }

  public async create(addressData: ICreateAddressDTO): Promise<Address> {
    console.log('entrouuuu', addressData)
    const address = this.ormRepository.create(addressData)

    await this.ormRepository.save(address)

    return address
  }

  public async findAll(): Promise<Address[]> {
    const addreses = await this.ormRepository.find()

    return addreses
  }

  public async findById(id: string): Promise<Address | null> {
    const address = await this.ormRepository.findOne({
      where: {
        id,
      },
    })

    return address
  }

  public async findByIdUser(userId: string): Promise<Address | null> {
    const address = await this.ormRepository.findOne({
      where: {
        user_id: userId,
      },
    })

    return address
  }

  public async findAndCount(
    options: IPaginationOptionsDTO,
  ): Promise<[Address[], number]> {
    const products = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
    })

    return products
  }

  public async save(address: Address): Promise<Address> {
    return this.ormRepository.save(address)
  }
}

export default AddressRepository
