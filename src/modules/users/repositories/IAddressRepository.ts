import Address from '../infra/typeorm/entities/Address'
import ICreateAddressDTO from '../dtos/ICreateAddressDTO'
import IPaginationOptionsDTO from '@modules/dtos/IPaginationOptionsDTO'

export default interface IAddressRepository {
  create(addressData: ICreateAddressDTO): Promise<Address>
  findById(addressId: string): Promise<Address | null>
  findAll(): Promise<Address[]>
  findByIdUser(userId: string): Promise<Address | null>
  findAndCount(options: IPaginationOptionsDTO): Promise<[Address[], number]>
  save(address: Address): Promise<Address>
}
