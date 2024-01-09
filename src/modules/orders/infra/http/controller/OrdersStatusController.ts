import { Request, Response } from 'express'

import { container } from 'tsyringe'

import CreateOrderService from '@modules/orders/services/CreateOrderService'
import FindOrderService from '@modules/orders/services/FindOrderService'
import { classToClass } from 'class-transformer'
import IndexOrderByUserService from '@modules/orders/services/IndexOrderByUserService'
import IndexOrderService from '@modules/orders/services/IndexOrderService'
import CreateOrderStatusService from '@modules/orders/services/CreateOrderStatusService'
import IndexStatusByOrderService from '@modules/orders/services/IndexStatusByOrderService'

export default class OrdersStatusController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const findOrder = container.resolve(FindOrderService)

    const order = await findOrder.execute({
      id,
    })

    return response.json(classToClass(order))
  }

  public async indexByOrder(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { page = 1, limit = 999999 } = request.query
    const { orderId } = request.params

    const findOrder = container.resolve(IndexStatusByOrderService)

    const order = await findOrder.execute(orderId, {
      page: Number(page),
      limit: Number(limit),
    })

    return response.json(classToClass(order))
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { page = 1, limit = 999999 } = request.query

    const findOrder = container.resolve(IndexOrderService)

    const order = await findOrder.execute({
      page: Number(page),
      limit: Number(limit),
    })

    return response.json(classToClass(order))
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createOrderStatus = container.resolve(CreateOrderStatusService)

    const orderStatus = await createOrderStatus.execute({
      payload: {
        ...request.body,
      },
    })

    return response.json(classToClass(orderStatus))
  }
}
