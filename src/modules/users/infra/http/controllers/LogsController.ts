import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import CreateLogService from '@modules/users/services/CreateLogService'
import IndexLogsService from '@modules/users/services/IndexLogsService'
import DeleteLogsService from '@modules/users/services/DeleteLogService'

export default class LogsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const create = container.resolve(CreateLogService)

    const log = await create.execute(req.body)

    return res.json(classToClass(log))
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { page = 1, limit = 999999 } = request.query

    const index = container.resolve(IndexLogsService)

    const logs = await index.execute({
      page: Number(page),
      limit: Number(limit),
    })

    return response.json(classToClass(logs))
  }

  public async delete(request: Request, response: Response): Promise<any> {
    const { name } = request.query

    const deleteService = container.resolve(DeleteLogsService)

    await deleteService.execute(String(name))

    return response.status(204).send()
  }
}
