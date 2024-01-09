import CreateArchiveService from '@modules/archives/services/CreateArchiveService'
import DeleteArchiveService from '@modules/archives/services/DeleteArchiveService'
import IndexArchiveService from '@modules/archives/services/IndexArchiveService'
import UpdateArchiveService from '@modules/archives/services/UpdateArchiveService'
import UpdatePrimaryArchiveService from '@modules/archives/services/UpdatePrimaryArchiveService'
import { classToClass } from 'class-transformer'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export default class ArchiveController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { originName, referenceId } = req.params
    const createArchive = container.resolve(CreateArchiveService)

    const files = (req as any).files as File[]

    const archives = await createArchive.execute({
      files,
      originName,
      referenceId,
    })

    return res.json(classToClass(archives))
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { page = 1, limit, originName, referenceId } = request.query

    const index = container.resolve(IndexArchiveService)

    const archives = await index.execute(
      {
        page: Number(page),
        limit: Number(limit),
      },
      originName ? String(originName) : undefined,
      referenceId ? String(referenceId) : undefined,
    )

    return response.json(classToClass(archives))
  }

  public async updateByReference(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { referenceId, archiveId } = request.params

    const updateArchivePrimary = container.resolve(UpdatePrimaryArchiveService)

    const product = await updateArchivePrimary.execute({
      referenceId,
      archiveId,
    })

    return response.json(classToClass(product))
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { archiveId } = request.params
    const { data } = request.body

    const updateArchivePrimary = container.resolve(UpdateArchiveService)

    const file = (request as any).file as File
    const product = await updateArchivePrimary.execute({
      file,
      archiveId,
      payload: data && JSON.parse(data),
    })

    return response.json(classToClass(product))
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { archiveId } = request.params

    const archiveDelete = container.resolve(DeleteArchiveService)

    await archiveDelete.execute({ archiveId })

    return response.status(204).send()
  }
}
