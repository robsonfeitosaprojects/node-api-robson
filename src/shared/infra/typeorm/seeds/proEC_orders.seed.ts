import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import User from '@modules/users/infra/typeorm/entities/User'
import { orderData, ordersStatusData } from './data/orders-data'
import Orders from '@modules/orders/infra/typeorm/entities/Order'
import OrdersStatus from '@modules/orders/infra/typeorm/entities/OrdersStatus'
import Address from '@modules/users/infra/typeorm/entities/Address'
import Product from '@modules/products/infra/typeorm/entities/Product'
import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts'

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

    const productsSlice = products.slice(0, 4)
    const productsSlice2 = products.slice(5, 6)
    const productsSlice3 = products.slice(7, 8)

    const address = await connection
      .getRepository(Address)
      .createQueryBuilder('address')
      .getMany()

    const { raw: orders } = await connection
      .createQueryBuilder()
      .insert()
      .into(Orders)
      .values(
        orderData.map((order) => {
          return {
            ...order,
            user: userMaster[0],
            address: address[0],
          }
        }),
      )
      .execute()

    await connection
      .createQueryBuilder()
      .insert()
      .into(OrdersProducts)
      .values(
        productsSlice.map((product) => ({
          product_name: product.name,
          product_id: product.id,
          price: product.price,
          quantity: product.product_data?.quantity ?? 0,
          order_id: orders[0].id,
        })),
      )
      .execute()

    await connection
      .createQueryBuilder()
      .insert()
      .into(OrdersProducts)
      .values(
        productsSlice2.map((product) => ({
          product_name: product.name,
          product_id: product.id,
          price: product.price,
          quantity: product.product_data?.quantity ?? 0,
          order_id: orders[1].id,
        })),
      )
      .execute()

    await connection
      .createQueryBuilder()
      .insert()
      .into(OrdersProducts)
      .values(
        productsSlice3.map((product) => ({
          product_name: product.name,
          product_id: product.id,
          price: product.price,
          quantity: product.product_data?.quantity ?? 0,
          order_id: orders[2].id,
        })),
      )
      .execute()

    for (const order of orders) {
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
  }
}
