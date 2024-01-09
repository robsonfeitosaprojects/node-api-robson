import Archive from '../infra/typeorm/entities/Archive'

export type ICreateArchiveDTO = Omit<
  Archive,
  'id' | 'created_at' | 'updated_at' | 'getPictureUrl' | 'referenceImage'
>
