import { Router } from 'express'

import uploadConfig from '@config/upload'
import ArchiveController from '../controllers/ArchiveController'
import multer from 'multer'

const archiveRouter = Router()
const archiveController = new ArchiveController()

const upload = multer(uploadConfig.multer)

archiveRouter.post(
  '/:originName/:referenceId',
  upload.array('images'),
  archiveController.create,
)
archiveRouter.get('/', archiveController.index)
archiveRouter.delete('/:archiveId', archiveController.delete)

archiveRouter.patch(
  '/:archiveId/reference/:referenceId',
  archiveController.updateByReference,
)
archiveRouter.put(
  '/:archiveId',
  upload.single('image'),
  archiveController.update,
)

export default archiveRouter
