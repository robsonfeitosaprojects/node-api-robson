import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateTimeDiscount1619895639102 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'ti100_time_discount',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'startDate',
            type: 'timestamp with time zone',
          },
          {
            name: 'endDate',
            type: 'timestamp with time zone',
          },
          {
            name: 'discount',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'varchar',
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
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('ti100_time_discount')
  }
}
