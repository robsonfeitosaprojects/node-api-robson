import { inject, injectable } from 'tsyringe'
import AppError from '@shared/errors/AppError'
import IProductsRepository from '@modules/products/repositories/IProductsRepository'
import Order from '../infra/typeorm/entities/Order'
import IOrdersRepository from '../repositories/IOrdersRepository'
import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider'
import IAddressRepository from '@modules/users/repositories/IAddressRepository'
import ICreateOrderDTO from '../dtos/ICreateOrderDTO'
import IOrderProductRepository from '../repositories/IOrderProductRepository'

export interface ProductOrder {
  productId: string
  quantity: number
}

// type StatusPayment =
//   | 'pending'
//   | 'awaiting_payment'
//   | 'awaiting_fulfillment'
//   | 'awaiting_shipment'
//   | 'awaiting_pickup'
//   | 'partially_shipped'
//   | 'completed'
//   | 'shiped'
//   | 'cancelled'
//   | 'declined'
//   | 'refunded'
//   | 'disputed'

interface productsOrder {
  productId: string
  quantity: number
}

export interface ICreatePayloadOrder extends ICreateOrderDTO {
  products_order: productsOrder[]
}

interface IRequest {
  user_id: string
  payload: ICreatePayloadOrder
}

@injectable()
class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('AddressRepository')
    private addressRepository: IAddressRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('OrderProductRepository')
    private orderProductRepository: IOrderProductRepository,
  ) {}

  public async execute({ user_id, payload }: IRequest): Promise<Order> {
    const { products_order, address_id, ...rest } = payload

    const userExist = await this.usersRepository.findById(user_id)

    if (!userExist) {
      throw new AppError('This user does not exists')
    }

    console.log({ products_order })
    const productIds = products_order.map((po) => po.productId)

    const productsData = await this.productsRepository.findAndCount(
      {
        limit: 99999,
        page: 1,
      },
      {
        productIds: JSON.stringify(productIds),
      },
      {
        alphabeticalDESC: true,
      },
    )

    // TODO: Pegou todos os produtos para fazer a deducao
    const [products] = productsData
    console.log({ products })

    // const updatedQuantities: IUpdateProductsQuantityDTO[] = []

    // const updatedProducts = productsFind.map((findProduct) => {
    //   const orderProduct = orders_products.find(
    //     (order_product) => order_product.id === findProduct.id,
    //   )

    //   if (orderProduct) {
    //     if (findProduct.type === 'product') {
    //       // TODO: Verificar quantidade em stoque para simples e multiplos produtos
    //       // if (findProduct.product_data.quantity < orderProduct.quantity) {
    //       //   throw new AppError('Hast not quantity available in stock')
    //       // }
    //       // TODO: Reduzir quantidade quando for simples ou multiplos produtos
    //       // if (orderProduct.id) {
    //       //   updatedQuantities.push({
    //       //     id: orderProduct.id,
    //       //     quantity:
    //       //       findProduct.product_data.quantity - orderProduct.quantity,
    //       //   })
    //       // }
    //       // return productsFind
    //     }
    //   }

    //   return findProduct
    // })

    const codOrder = await this.builderHash()
    // await this.productsRepository.updateQuantity(updatedQuantities)

    if (address_id) {
      const addressExist = await this.addressRepository.findById(address_id)

      if (!addressExist) {
        throw new AppError('Address not found')
      }
    }

    const order = await this.ordersRepository.create({
      ...rest,
      user: userExist,
      address_id,
      cod_order: codOrder,
    })

    products.forEach(async (product, index) => {
      await this.orderProductRepository.create({
        order,
        product,
        quantity: products_order[index].quantity,
      })
    })

    return order
  }

  private async builderHash() {
    const hashCode = await this.hashProvider.generateHash(String(Math.random()))

    const codeValue = hashCode.slice(-8, -1).toLocaleUpperCase()
    return codeValue
  }
}

export default CreateOrderService
