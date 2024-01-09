import { DataSource } from 'typeorm'

import dotenv from 'dotenv'

import datasourceConfig from '@config/datasource'

dotenv.config()

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST_PG,
  username: process.env.DB_USERNAME_PG,
  port: Number(process.env.DB_PORT_PG),
  password: process.env.DB_PASSWORD_PG,
  database: process.env.DB_DATABASE_PG,
  logging: false,
  synchronize: false,
  entities: [
    `./${
      process.env.NODE_ENV === 'local' ? 'src' : 'dist'
    }/modules/**/infra/typeorm/entities/*`,
  ],
  migrations: [
    `./${
      process.env.NODE_ENV === 'local' ? 'src' : 'dist'
    }/shared/**/infra/typeorm/migrations/*`,
  ],
  extra: {
    ssl: false,
  },
  dropSchema: datasourceConfig.options.dropSchema,
})

export default dataSource
