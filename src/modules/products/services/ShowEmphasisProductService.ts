import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'
import Product from '../infra/typeorm/entities/Product'
import IProductsRepository from '../repositories/IProductsRepository'

@injectable()
class ShowEmphasisProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(): Promise<Product> {
    const product = await this.productsRepository.findEmphasis()

    if (!product) {
      throw new AppError('Product does not found')
    }

    return product
  }
}

export default ShowEmphasisProductService
