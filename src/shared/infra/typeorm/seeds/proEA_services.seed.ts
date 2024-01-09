import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import Product from '@modules/products/infra/typeorm/entities/Product'
import {
  servicesImages,
  archivesServicesData,
  servicesData,
  servicesAttributesData,
  archiveServicesVariantsImagesData,
  servicesVariationsData,
} from './data/services-data'
import Archive from '@modules/archives/infra/typeorm/entities/Archive'
import Categories from '@modules/products/infra/typeorm/entities/ProductCategory'
import getCategoriesIds from './utils/get-categories-ids'
import ProductAttributes from '@modules/products/infra/typeorm/entities/ProductAttributes'
import ProductVariations from '@modules/products/infra/typeorm/entities/ProductVariations'

const categoriesTarget = [
  ['Carros', 'Manutenção'],
  ['Carros', 'Manutenção'],
  ['Salão', 'Corte de cabelo'],
  ['Computação', 'Formatação'],
  ['Computação', 'Formatação'],
  ['Segurança', 'Vigilancia'],
  ['Segurança', 'Vigilancia'],
  ['Salão', 'Mulheres'],
  ['Limpeza', 'Quimica'],
  ['Clinica', 'Odontologia'],
  ['Gerais', 'Natureza'],
  ['Carros', 'Luxo'],
]

export default class ServicesDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const categories = await connection
      .getRepository(Categories)
      .createQueryBuilder('pd101_product_categories')
      .getMany()

    const productsWithCategories = servicesData.map((service, index) => {
      return {
        ...service,
        categories: getCategoriesIds(categories, categoriesTarget[index]),
      }
    })

    const { raw: services } = await connection
      .createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsWithCategories)
      .execute()

    const { raw: attributes } = await connection
      .createQueryBuilder()
      .insert()
      .into(ProductAttributes)
      .values(
        servicesAttributesData.map((attribute, index) => ({
          ...attribute,
          ...(index === 0 && { product_id: services[0].id }),
          ...(index === 1 && { product_id: services[3].id }),
          ...(index === 2 && { product_id: services[1].id }),
        })),
      )
      .execute()

    await connection
      .createQueryBuilder()
      .insert()
      .into(ProductVariations)
      .values(
        servicesVariationsData.map((variations, index) => ({
          ...variations,
          ...(index === 0 && { product_attr_id: attributes[0].id }),
          ...(index === 1 && { product_attr_id: attributes[0].id }),
          ...(index === 2 && { product_attr_id: attributes[1].id }),
          ...(index === 3 && { product_attr_id: attributes[1].id }),
          ...(index === 4 && { product_attr_id: attributes[2].id }),
          ...(index === 5 && { product_attr_id: attributes[2].id }),
          ...(index === 6 && { product_attr_id: attributes[2].id }),
        })),
      )
      .execute()

    const archives = Array.from({ length: servicesImages.length }, (_, i) => i)

    for (const archive of archives) {
      await connection
        .createQueryBuilder()
        .insert()
        .into(Archive)
        .values(archivesServicesData(archive, services[archive].id))
        .execute()
    }

    await connection
      .createQueryBuilder()
      .insert()
      .into(Archive)
      .values(
        archiveServicesVariantsImagesData.map((archive, index) => ({
          ...archive,
          reference_id: services[index].id,
          ...([0, 1].includes(index) && { reference_id: services[0].id }),
          ...([2, 3].includes(index) && { reference_id: services[3].id }),
          ...([4, 5, 6].includes(index) && { reference_id: services[1].id }),
        })),
      )
      .execute()
  }
}
