import { inject, injectable } from 'tsyringe'

import AppError from '@shared/errors/AppError'
import path from 'path'

import OrdersStatus from '../infra/typeorm/entities/OrdersStatus'
import IOrderStatusRepository from '../repositories/IOrderStatusRepository'
import IOrdersRepository from '../repositories/IOrdersRepository'
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider'
import User from '@modules/users/infra/typeorm/entities/User'
import Orders from '../infra/typeorm/entities/Order'

export type StatusPayment =
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

interface IRequest {
  payload: {
    name: StatusPayment
    order_id: string
  }
}

@injectable()
class CreateOrderStatusService {
  constructor(
    @inject('OrderStatusRepository')
    private orderStatusRepository: IOrderStatusRepository,

    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,
  ) {}

  public async execute({ payload }: IRequest): Promise<OrdersStatus> {
    const order = await this.ordersRepository.findById(payload.order_id)

    if (!order) {
      throw new AppError('Order not found')
    }

    const orderStatus = await this.orderStatusRepository.create({
      ...payload,
      order,
    })

    this.sendMailStatus(order, orderStatus.name as StatusPayment)

    return orderStatus
  }

  private async sendMailStatus(order: Orders, status: StatusPayment) {
    const activedTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      `${status}.hbs`,
    )

    await this.mailProvider.sendMail({
      to: {
        name: order.user.name,
        email: order.user.email,
      },
      subject: `Pedido #${order.cod_order} - [empresa]`,
      templateData: {
        file: activedTemplate,
        variables: {
          name: `user.name`,
        },
      },
    })
  }
}

export default CreateOrderStatusService
