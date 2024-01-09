import { injectable, inject } from 'tsyringe'

import Product from '../infra/typeorm/entities/Product'
import IProductsRepository from '../repositories/IProductsRepository'
import IPaginationOptionsDTO from '../../dtos/IPaginationOptionsDTO'
import IWishRepository from '../repositories/IWishRepository'
import ICategoriesRepository from '../repositories/ICategoriesRepository'
import Categories from '../infra/typeorm/entities/ProductCategory'
import {
  IFilterOrderProduct,
  IFilterProduct,
} from '../infra/typeorm/repositories/ProductsRepository'

@injectable()
class IndexProductsService {
  constructor(
    @inject('ProductsRepository')
    private readonly productsRepository: IProductsRepository,

    @inject('WishRepository')
    private readonly wishRepository: IWishRepository,

    @inject('CategoriesRepository')
    private readonly categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute(
    options: IPaginationOptionsDTO,
    filter: IFilterProduct,
    order: IFilterOrderProduct,
  ): Promise<[Product[], number]> {
    const products = await this.productsRepository.findAndCount(
      options,
      filter,
      order,
    )

    for (const product of products[0]) {
      const wish = await this.wishRepository.findByProductAndUser(
        product.id,
        filter.userId,
      )

      if (product.categories) {
        const categories: Categories[] = []
        for (const categoryId of JSON.parse(product.categories)) {
          const category = await this.categoriesRepository.findById(categoryId)

          if (category) {
            categories.push(category)
          }
        }

        product.categories_items = categories
      }

      product.wish = wish ?? null
    }

    return products
  }
}

export default IndexProductsService
