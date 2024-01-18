import { Router } from 'express'

import ClientsController from '../controllers/ClientsController'

const clientsController = new ClientsController()

const clientsRouter = Router()

clientsRouter.post('/', clientsController.create)

clientsRouter.get('/', clientsController.index)

clientsRouter.delete('/:id', clientsController.delete)

export default clientsRouter
