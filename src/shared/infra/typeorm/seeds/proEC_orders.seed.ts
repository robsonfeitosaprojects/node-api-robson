import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import User from '@modules/users/infra/typeorm/entities/User'
import { orderData, ordersStatusData } from './data/orders-data'
import Orders from '@modules/orders/infra/typeorm/entities/Order'
import OrdersStatus from '@modules/orders/infra/typeorm/entities/OrdersStatus'
import Address from '@modules/users/infra/typeorm/entities/Address'
import Product from '@modules/products/infra/typeorm/entities/Product'
import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrderProduct'

export default class OrdersDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const userMaster = await connection
      .getRepository(User)
      .createQueryBuilder('users')
      .leftJoinAndSelect('users.settings', 'settings')
      .where('settings.level = :level', { level: '1' })
      .getMany()

    const products = await connection
      .getRepository(Product)
      .createQueryBuilder('pd100_products')
      .getMany()

    const address = await connection
      .getRepository(Address)
      .createQueryBuilder('address')
      .getMany()

    const onlyProduct = products.filter((product) => product.type === 'product')
    const onlyService = products.filter((product) => product.type === 'service')

    const productsSlice = onlyProduct.slice(0, 4)
    const productsSlice2 = onlyProduct.slice(5, 6)
    const productsSlice3 = onlyProduct.slice(7, 8)

    await connection
      .createQueryBuilder()
      .insert()
      .into(Orders)
      .values(
        orderData.map((order, index: number) => {
          // Only products
          if (index === 0) {
            order.products_order = [
              {
                quantity: 4,
                productId: onlyProduct[0].id,
              },
            ]
          }
          if (index === 1) {
            order.products_order = [
              {
                quantity: 2,
                productId: onlyProduct[1].id,
              },
            ]
          }
          if (index === 2) {
            order.products_order = [
              {
                quantity: 3,
                productId: onlyProduct[2].id,
              },
            ]
          }

          // Only services
          if (index === 3) {
            order.products_order = [
              {
                quantity: 3,
                productId: onlyService[0].id,
              },
            ]
          }
          if (index === 4) {
            order.products_order = [
              {
                quantity: 3,
                productId: onlyService[1].id,
              },
            ]
          }
          if (index === 5) {
            order.products_order = [
              {
                quantity: 3,
                productId: onlyService[2].id,
              },
            ]
          }
          if (index === 6) {
            order.products_order = [
              {
                quantity: 3,
                productId: onlyService[3].id,
              },
            ]
          }
          if (index === 7) {
            order.products_order = [
              {
                quantity: 3,
                productId: onlyService[4].id,
              },
            ]
          }

          return {
            ...order,
            user: userMaster[0],
            address: address[0],
          }
        }),
      )
      .execute()

    const orders = await connection
      .getRepository(Orders)
      .createQueryBuilder('or100_orders')
      .getMany()

    await connection
      .createQueryBuilder()
      .insert()
      .into(OrdersProducts)
      .values(
        productsSlice.map((product) => ({
          product,
          quantity: product.product_data?.quantity ?? 0,
          order: orders[0],
        })),
      )
      .execute()

    await connection
      .createQueryBuilder()
      .insert()
      .into(OrdersProducts)
      .values(
        productsSlice2.map((product) => ({
          product,
          quantity: product.product_data?.quantity ?? 0,
          order: orders[1],
        })),
      )
      .execute()

    await connection
      .createQueryBuilder()
      .insert()
      .into(OrdersProducts)
      .values(
        productsSlice3.map((product) => ({
          product,
          quantity: product.product_data?.quantity ?? 0,
          order: orders[2],
        })),
      )
      .execute()

    console.log({ orders })
    // Services orders
    await connection
      .createQueryBuilder()
      .insert()
      .into(OrdersProducts)
      .values([
        {
          product: onlyService[0],
          quantity: 1,
          order: orders[3],
        },
      ])
      .execute()

    console.log('entrouu$##')

    await connection
      .createQueryBuilder()
      .insert()
      .into(OrdersProducts)
      .values([
        {
          product: onlyService[1],
          quantity: 1,
          order: orders[4],
        },
      ])
      .execute()
    await connection
      .createQueryBuilder()
      .insert()
      .into(OrdersProducts)
      .values([
        {
          product: onlyService[2],
          quantity: 1,
          order: orders[5],
        },
      ])
      .execute()
    await connection
      .createQueryBuilder()
      .insert()
      .into(OrdersProducts)
      .values([
        {
          product: onlyService[3],
          quantity: 1,
          order: orders[6],
        },
      ])
      .execute()
    await connection
      .createQueryBuilder()
      .insert()
      .into(OrdersProducts)
      .values([
        {
          product: onlyService[4],
          quantity: 1,
          order: orders[7],
        },
      ])
      .execute()

    orders.forEach(async (order: any, index: number) => {
      if (index < 3) {
        await connection
          .createQueryBuilder()
          .insert()
          .into(OrdersStatus)
          .values(
            ordersStatusData.map((orderStatus) => {
              return { ...orderStatus, order_id: order.id }
            }),
          )
          .execute()
      }
    })
  }
}
