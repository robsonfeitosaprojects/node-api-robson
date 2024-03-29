import { Router } from 'express'

import LogsController from '../controllers/LogsController'

const logsController = new LogsController()

const logsRouter = Router()

logsRouter.post('/', logsController.create)

logsRouter.get('/', logsController.index)

logsRouter.delete('/', logsController.delete)

export default logsRouter
