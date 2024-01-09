import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'

import { archiveProvidersData, providersData } from './data/providers-data'
import ProductProvider from '@modules/products/infra/typeorm/entities/ProductProvider'
import Archive from '@modules/archives/infra/typeorm/entities/Archive'

export default class ProvidersDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const { raw: providers } = await connection
      .createQueryBuilder()
      .insert()
      .into(ProductProvider)
      .values(providersData)
      .execute()

    await connection
      .createQueryBuilder()
      .insert()
      .into(Archive)
      .values(
        archiveProvidersData.map((archive, index) => ({
          ...archive,
          reference_id: providers[index].id,
        })),
      )
      .execute()
  }
}
