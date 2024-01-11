import { Router } from 'express'

import transactionsRouter from '@modules/users/infra/http/routes/transactions.routes'
import ordersRouter from '@modules/orders/infra/http/routes/orders.routes'
import ordersStatusRouter from '@modules/orders/infra/http/routes/ordersStatus.routes'
import usersRouter from '@modules/users/infra/http/routes/users.routes'
import sesionsRouter from '@modules/users/infra/http/routes/sessions.routes'
import creditCardRouter from '@modules/users/infra/http/routes/creditCard.routes'
import passwordRouter from '@modules/users/infra/http/routes/password.routes'
import addressRouter from '@modules/users/infra/http/routes/address.routes'
import contactRouter from '@modules/users/infra/http/routes/contact.routes'
import accountRouter from '@modules/users/infra/http/routes/account.routes'
import commentRoutes from '@modules/users/infra/http/routes/comment.routes'
import settingsRouter from '@modules/settings/infra/http/routes/settings.routes'
import productsRouter from '@modules/products/infra/http/routes/products.routes'
import wishRouter from '@modules/products/infra/http/routes/wish.routes'
import categoriesRouter from '@modules/products/infra/http/routes/categories.routes'
import couponRouter from '@modules/products/infra/http/routes/coupon.routes'
import productDataRouter from '@modules/products/infra/http/routes/productData.routes'
import productAttributeRouter from '@modules/products/infra/http/routes/productAttr.routes'
import productVariationsRouter from '@modules/products/infra/http/routes/productVariations.routes'
import providersRouter from '@modules/products/infra/http/routes/providers.routes'
import timeDiscountRouter from '@modules/products/infra/http/routes/timeDiscount.routes'
import archiveRouter from '@modules/archives/infra/http/routes/archive.routes'
import teamsRouter from '@modules/users/infra/http/routes/team.routes'
import professionalRouter from '@modules/users/infra/http/routes/professional.routes'
import timeIntervalsRouter from '@modules/users/infra/http/routes/timeIntervals.routes'
import scheduleRouter from '@modules/schedule/infra/http/routes/schedule.routes'

const routes = Router()

routes.use('/actived', accountRouter)
routes.use('/users', usersRouter)
routes.use('/orders', ordersRouter, ordersStatusRouter)
routes.use('/contact', contactRouter)
routes.use('/transactions', transactionsRouter)
routes.use('/sessions', sesionsRouter)
routes.use('/card', creditCardRouter)
routes.use('/password', passwordRouter)
routes.use('/address', addressRouter)
routes.use('/settings', settingsRouter)
routes.use('/comments', commentRoutes)
routes.use('/time-discount', timeDiscountRouter)
routes.use(
  '/products',
  productsRouter,
  wishRouter,
  couponRouter,
  productDataRouter,
  productAttributeRouter,
  productVariationsRouter,
  providersRouter,
)
routes.use('/coupon', couponRouter)
routes.use('/categories', categoriesRouter)
routes.use('/archive', archiveRouter)
routes.use('/teams', teamsRouter)
routes.use('/professionals', timeIntervalsRouter, professionalRouter)
routes.use('/schedules', scheduleRouter)

export default routes
