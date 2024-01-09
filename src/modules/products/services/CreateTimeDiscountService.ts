import { inject, injectable } from 'tsyringe'
import TimeDiscount from '../infra/typeorm/entities/TimeDiscount'
import ITimeDiscountRepository from '../repositories/ITimeDiscountRepository'
import { ICreateTimeDiscountDTO } from '../dtos/ICreateTimeDiscountDTO'
import IProductsRepository from '../repositories/IProductsRepository'

interface CreateTimeDiscountProps extends ICreateTimeDiscountDTO {
  referencesIds: string[]
}

@injectable()
class CreateTimeDiscountService {
  constructor(
    @inject('TimeDiscountRepository')
    private TimeDiscountRepository: ITimeDiscountRepository,

    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(
    payload: CreateTimeDiscountProps,
  ): Promise<TimeDiscount> {
    const { referencesIds, ...rest } = payload

    const timeDiscount = await this.TimeDiscountRepository.create(rest)
    for (const referenceId of referencesIds) {
      const product = await this.productsRepository.findById(referenceId)

      if (product) {
        product.time_discount = timeDiscount

        await this.productsRepository.save(product)
      }
    }

    return timeDiscount
  }
}

export default CreateTimeDiscountService
