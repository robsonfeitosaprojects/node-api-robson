import { Router } from 'express'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'
import OrdersStatusController from '../controller/OrdersStatusController'

const ordersStatusRouter = Router()
const ordersStatusController = new OrdersStatusController()

ordersStatusRouter.use(ensureAuthenticated)

ordersStatusRouter.post('/status', ordersStatusController.create)
// ordersStatusRouter.get('/', ordersStatusController.index)
// ordersStatusRouter.get('/byuser', ordersStatusController.indexByUser)
ordersStatusRouter.get('/status/:orderId', ordersStatusController.indexByOrder)

export default ordersStatusRouter
