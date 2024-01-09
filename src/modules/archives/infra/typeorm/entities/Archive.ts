import { Expose } from 'class-transformer'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'

import uploadConfig from '@config/upload'
import Product from '@modules/products/infra/typeorm/entities/Product'

@Entity('ar100_archives')
class Archive {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  origin_target: string

  @Column()
  reference_id: string

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'reference_id' })
  referenceImage: Product

  @Column()
  name: string

  @Column({ default: false })
  is_primary: boolean

  @Column()
  size: string

  @Column()
  type: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @Expose({ name: 'picture_url' })
  getPictureUrl(): string | null {
    if (!this.name) {
      return null
    }

    switch (uploadConfig.driver) {
      case 'disk':
        return `${process.env.APP_API_URL}/files/${this.name}`
      case 's3':
        return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.name}`
      default:
        return null
    }
  }
}

export default Archive
