import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import CreateClientService from '@modules/users/services/CreateClientService'
import IndexClientsService from '@modules/users/services/IndexClientsService'
import DeleteClientService from '@modules/users/services/DeleteClientService'

export default class ClientsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const create = container.resolve(CreateClientService)

    const client = await create.execute(req.body)

    return res.json(classToClass(client))
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { page = 1, limit = 999999 } = request.query

    const index = container.resolve(IndexClientsService)

    const clients = await index.execute({
      page: Number(page),
      limit: Number(limit),
    })

    return response.json(classToClass(clients))
  }

  public async delete(request: Request, response: Response): Promise<any> {
    const { id } = request.params

    const deleteService = container.resolve(DeleteClientService)

    await deleteService.execute(id)

    return response.status(204).send()
  }
}
