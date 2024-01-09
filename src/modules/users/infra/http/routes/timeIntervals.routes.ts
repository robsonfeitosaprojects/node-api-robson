import { Router } from 'express'

import TimeIntervalsController from '../controllers/TimeIntervalsController'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const timeIntervalsRouter = Router()
const timeIntervalsController = new TimeIntervalsController()

timeIntervalsRouter.use(ensureAuthenticated)

timeIntervalsRouter.post('/time-intervals', timeIntervalsController.create)
timeIntervalsRouter.put(
  '/:professionalId/time-intervals',
  timeIntervalsController.update,
)
timeIntervalsRouter.get(
  '/time-intervals/:timeIntervalId',
  timeIntervalsController.show,
)
timeIntervalsRouter.get(
  '/time-intervals/blocked-dates/:professionalId',
  timeIntervalsController.showBlockedDates,
)
timeIntervalsRouter.get(
  '/time-intervals/availables/:professionalId',
  timeIntervalsController.showAvailablesProfessionalsDates,
)
timeIntervalsRouter.get('/time-intervals', timeIntervalsController.index)
timeIntervalsRouter.delete(
  '/time-intervals/:timeIntervalId',
  timeIntervalsController.delete,
)

export default timeIntervalsRouter
