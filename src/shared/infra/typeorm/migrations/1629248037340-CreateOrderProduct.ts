import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateOrderProduct1629248037340
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'or100_pr100_order_product',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'order_id',
            type: 'uuid',
          },
          {
            name: 'product_id',
            type: 'uuid',
          },
          {
            name: 'quantity',
            type: 'int',
          },
        ],
        foreignKeys: [
          {
            name: 'ProductOrderId',
            columnNames: ['product_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'pd100_products',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          {
            name: 'OrderProductId',
            columnNames: ['order_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'or100_orders',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('or100_pr100_order_product')
  }
}
