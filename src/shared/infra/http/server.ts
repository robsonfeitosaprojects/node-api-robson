import 'reflect-metadata'
import 'dotenv/config'
import app from './app'
import dataSource from '../typeorm'

dataSource
  .initialize()
  .then(() => {
    app.listen(3333, () => {
      console.log('Server started on port 3333!')
    })
  })
  .finally(() => {
    console.log(`Swagger: ${process.env.APP_API_URL || ''}/api-docs`)
  })
