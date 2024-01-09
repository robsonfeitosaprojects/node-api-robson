import Categories from '@modules/products/infra/typeorm/entities/ProductCategory'

export default function getCategoriesIds(
  categories: Categories[],
  names: string[],
) {
  return JSON.stringify(
    categories.filter((c) => names.includes(c.name)).map((c) => c.id),
  )
}
