import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateProductVariations1698902462288
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'pd106_products_variations',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'product_attr_id',
            type: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'int',
          },
          {
            name: 'quantity',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'time',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'actived',
            type: 'boolean',
          },
          {
            name: 'weight',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'dimensions',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'sku',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'ProductVariationsAttrId',
            columnNames: ['product_attr_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'pd105_products_attributes',
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('pd106_products_variations')
  }
}
