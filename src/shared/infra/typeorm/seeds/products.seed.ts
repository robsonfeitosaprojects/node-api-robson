import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import Product from '@modules/products/infra/typeorm/entities/Product'
import {
  archiveVariantsProductsImagesData,
  archivesProductsData,
  productsAttributesData,
  productsData,
  productsImagesData,
  productsSettingsData,
  productsVariationsData,
} from './data/products-data'
import Categories from '@modules/products/infra/typeorm/entities/ProductCategory'
import Archive from '@modules/archives/infra/typeorm/entities/Archive'
import getCategoriesIds from './utils/get-categories-ids'
import TimeDiscount from '@modules/products/infra/typeorm/entities/TimeDiscount'
import { timeDiscountData } from './data/time-discount-data'
import ProductData from '@modules/products/infra/typeorm/entities/ProductData'
import ProductAttributes from '@modules/products/infra/typeorm/entities/ProductAttributes'
import ProductVariations from '@modules/products/infra/typeorm/entities/ProductVariations'

const categoriesTarget = [
  ['Eletronicos', 'Computador'],
  ['Games e console', 'Cadeiras'],
  ['Beleza', 'Perfumes'],
  ['Jogos e brinquedos', 'Brinquedos de montar'],
  ['Jogos e brinquedos', 'Brinquedos de controle remoto'],
  ['Livros', 'Didadicos  e acadêmicos'],
  ['Jogos e brinquedos', 'Armas de brinquedo'],
  ['Eletrodomésticos', 'Cozinha'],
  ['Ambientes', 'Cama, Mesa e Banho'],
  ['Ferramentas', 'Eletrica'],
  ['Ferramentas', 'Eletrica'],
  ['Ambientes', 'Cama, Mesa e Banho'],
  ['Ferramentas', 'Eletrica'],
  ['Ferramentas', 'Eletrica'],
  ['Eletronicos', 'Tablets e celulares'],
  ['Eletronicos', 'Sons, Câmeras e acessórios'],
  ['Eletronicos', 'Sons, Câmeras e acessórios'],
  ['Eletronicos', 'Sons, Câmeras e acessórios'],
  ['Eletronicos', 'Sons, Câmeras e acessórios'],
  ['Eletronicos', 'TVs'],
]

const archivesProducts = Array.from(
  { length: productsImagesData.length },
  (_, i) => i,
)

const archivesVariations = Array.from(
  { length: productsVariationsData.length },
  (_, i) => i,
)

export default class ProductsDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const categories = await connection
      .getRepository(Categories)
      .createQueryBuilder('pd101_product_categories')
      .getMany()

    const { raw: timeDiscount } = await connection
      .createQueryBuilder()
      .insert()
      .into(TimeDiscount)
      .values(timeDiscountData)
      .execute()

    const productsWithCategories = productsData.map((product, index) => {
      if (index === 3) {
        product.time_discount_id = timeDiscount[0].id
      }

      if (index === 4) {
        product.time_discount_id = timeDiscount[0].id
      }

      if (index === 7) {
        product.time_discount_id = timeDiscount[1].id
      }

      if (index === 19) {
        product.time_discount_id = timeDiscount[2].id
      }

      if (index === 11) {
        product.time_discount_id = timeDiscount[3].id
      }

      if (index === 13) {
        product.time_discount_id = timeDiscount[4].id
      }

      return {
        ...product,
        categories: getCategoriesIds(categories, categoriesTarget[index]),
      }
    })

    const { raw: products } = await connection
      .createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsWithCategories)
      .execute()

    await connection
      .createQueryBuilder()
      .insert()
      .into(ProductData)
      .values(
        productsSettingsData.map((product, index) => ({
          ...product,
          product_id: products[index].id,
          dimensions: JSON.stringify(product.dimensions),
        })),
      )
      .execute()

    const { raw: attributes } = await connection
      .createQueryBuilder()
      .insert()
      .into(ProductAttributes)
      .values(
        productsAttributesData.map((attribute, index) => ({
          ...attribute,
          ...(index === 0 && { product_id: products[4].id }),
          ...(index === 1 && { product_id: products[6].id }),
          ...(index === 2 && { product_id: products[3].id }),
        })),
      )
      .execute()

    await connection
      .createQueryBuilder()
      .insert()
      .into(ProductVariations)
      .values(
        productsVariationsData.map((variations, index) => ({
          ...variations,
          ...(index === 0 && { product_attr_id: attributes[0].id }),
          ...(index === 1 && { product_attr_id: attributes[0].id }),
          ...(index === 2 && { product_attr_id: attributes[0].id }),
          ...(index === 3 && { product_attr_id: attributes[1].id }),
          ...(index === 4 && { product_attr_id: attributes[1].id }),
          ...(index === 5 && { product_attr_id: attributes[2].id }),
          ...(index === 6 && { product_attr_id: attributes[2].id }),
          ...(index === 7 && { product_attr_id: attributes[2].id }),
          ...(index === 8 && { product_attr_id: attributes[2].id }),
        })),
      )
      .execute()

    for (const archive of archivesProducts) {
      await connection
        .createQueryBuilder()
        .insert()
        .into(Archive)
        .values(archivesProductsData(archive, products[archive].id))
        .execute()
    }

    await connection
      .createQueryBuilder()
      .insert()
      .into(Archive)
      .values(
        archiveVariantsProductsImagesData.map((archive, index) => ({
          ...archive,
          reference_id: products[index].id,
          ...([0, 1, 2].includes(index) && { reference_id: products[4].id }),
          ...([3, 4].includes(index) && { reference_id: products[6].id }),
          ...([5, 6, 7].includes(index) && { reference_id: products[3].id }),
        })),
      )
      .execute()
  }
}
