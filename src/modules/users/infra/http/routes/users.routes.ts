import { Router } from 'express'
import multer from 'multer'
import uploadConfig from '@config/upload'

import UsersController from '../controllers/UsersController'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const usersRouter = Router()
const usersController = new UsersController()

const upload = multer(uploadConfig.multer)

usersRouter.post('/', usersController.create)
usersRouter.post('/send-email-client', usersController.createSendEmailClient)

usersRouter.use(ensureAuthenticated)

usersRouter.put('/:user_id', usersController.update)

usersRouter.get('/', usersController.index)
usersRouter.get('/:user_id', usersController.show)

usersRouter.delete('/:user_id', usersController.delete)

export default usersRouter
