import { inject, injectable } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import IProductsRepository from '@modules/products/repositories/IProductsRepository'
import IUpdateProductsQuantityDTO from '@modules/products/dtos/IUpdateProductsQuantityDTO'
import Order from '../infra/typeorm/entities/Order'
import IOrdersRepository from '../repositories/IOrdersRepository'
import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import Product from '@modules/products/infra/typeorm/entities/Product'
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider'
import IAddressRepository from '@modules/users/repositories/IAddressRepository'

export interface ProductOrder {
  productId: string
  quantity: number
}

type StatusPayment =
  | 'pending'
  | 'awaiting_payment'
  | 'awaiting_fulfillment'
  | 'awaiting_shipment'
  | 'awaiting_pickup'
  | 'partially_shipped'
  | 'completed'
  | 'shiped'
  | 'cancelled'
  | 'declined'
  | 'refunded'
  | 'disputed'

export interface CreateOrderRequest {
  products: ProductOrder[]
  tracking_code?: string
  status?: StatusPayment
  payment_method: 'pix' | 'tickets'
  amount: number
  type_product: string
  address_id: string
  professional?: string
  coupon_applied?: {
    coupon: string
    discount: number
  }
  freight?: {
    name: string
    value: number
  }
}

interface IRequest {
  user_id: string
  payload: CreateOrderRequest
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
  ) {}

  public async execute({ user_id, payload }: IRequest): Promise<Order> {
    const {
      products,
      payment_method,
      coupon_applied,
      freight,
      amount,
      address_id,
      tracking_code,
      professional,
      type_product,
    } = payload

    const userExist = await this.usersRepository.findById(user_id)

    if (!userExist) {
      throw new AppError('This user does not exists')
    }

    const addressExist = await this.addressRepository.findById(address_id)

    const productsFind: Product[] = []

    for (const product of products) {
      const productExist = await this.productsRepository.findById(
        product.productId,
      )

      if (!productExist) {
        throw new AppError('Products was not found')
      }

      productsFind.push(productExist)
    }

    const updatedQuantities: IUpdateProductsQuantityDTO[] = []

    const updatedProducts = productsFind.map((findProduct) => {
      const orderProduct = products.find(
        (product) => product.productId === findProduct.id,
      )

      if (orderProduct) {
        if (findProduct.type === 'product') {
          if (findProduct.product_data.quantity < orderProduct.quantity) {
            throw new AppError('Hast not quantity available in stock')
          }

          updatedQuantities.push({
            id: orderProduct.productId,
            quantity: findProduct.product_data.quantity - orderProduct.quantity,
          })

          return {
            ...findProduct,
            quantity: orderProduct.quantity,
          }
        }
      }

      return findProduct
    })

    const codOrder = await this.builderHash()
    // await this.productsRepository.updateQuantity(updatedQuantities)

    const order = await this.ordersRepository.create({
      user: userExist,
      address: addressExist ?? null,
      cod_order: codOrder,
      payment_method,
      type_product,
      amount,
      professional,
      coupon_applied: coupon_applied as string | undefined,
      freight: freight as string | undefined,
      tracking_code,
      products: updatedProducts.map((product) => ({
        product_name: product.name,
        product_id: product.id,
        price: product.price ?? 0,
        quantity:
          product.type === 'product' ? product.product_data.quantity : 1,
      })),
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
