import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import Categories from '@modules/products/infra/typeorm/entities/ProductCategory'
import { categoriesServicesData } from './data/categories-services-data'

export default class CategoriesServicesDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    for (const categoryData of categoriesServicesData) {
      const { sub, ...payload } = categoryData
      const { raw: category } = await connection
        .createQueryBuilder()
        .insert()
        .into(Categories)
        .values(payload)
        .execute()

      if (category) {
        for (const subcategory of sub) {
          await connection
            .createQueryBuilder()
            .insert()
            .into(Categories)
            .values({
              ...subcategory,
              parent_id: category[0].id,
            })
            .execute()
        }
      }
    }
  }
}
