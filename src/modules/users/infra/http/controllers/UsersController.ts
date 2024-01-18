import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import CreateUserService from '@modules/users/services/CreateUserService'
import ShowUserService from '@modules/users/services/ShowUserService'
import IndexUsersService from '@modules/users/services/IndexUsersService'
import UpdateUserService from '@modules/users/services/UpdateUserService'
import DeleteUserService from '@modules/users/services/DeleteUserService'
import SendEmailClientService from '@modules/users/services/SendEmailClientService'

export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const createUser = container.resolve(CreateUserService)

    const user = await createUser.execute(req.body)

    return res.json(classToClass(user))
  }

  public async createSendEmailClient(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const createUser = container.resolve(SendEmailClientService)

    await createUser.execute(req.body)

    return res.status(204).send()
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params

    const updateUser = container.resolve(UpdateUserService)

    const user = await updateUser.execute({ user_id, userData: request.body })

    return response.json(classToClass(user))
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { page = 1, limit = 999999 } = request.query

    const indexUser = container.resolve(IndexUsersService)

    const users = await indexUser.execute({
      page: Number(page),
      limit: Number(limit),
    })

    return response.json(classToClass(users))
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params

    const showUser = container.resolve(ShowUserService)

    const user = await showUser.execute(user_id)

    return response.json(classToClass(user))
  }

  public async delete(request: Request, response: Response): Promise<any> {
    const { user_id } = request.params

    const deleteUser = container.resolve(DeleteUserService)

    await deleteUser.execute(user_id)

    return response.status(204).send()
  }
}
