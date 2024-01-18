import { Router } from 'express'

import usersRouter from '@modules/users/infra/http/routes/users.routes'
import sesionsRouter from '@modules/users/infra/http/routes/sessions.routes'
import passwordRouter from '@modules/users/infra/http/routes/password.routes'
import logsRouter from '@modules/users/infra/http/routes/logs.routes'
import clientsRouter from '@modules/users/infra/http/routes/clients.routes'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/sessions', sesionsRouter)
routes.use('/password', passwordRouter)
routes.use('/logs', logsRouter)
routes.use('/clients', clientsRouter)

export default routes
