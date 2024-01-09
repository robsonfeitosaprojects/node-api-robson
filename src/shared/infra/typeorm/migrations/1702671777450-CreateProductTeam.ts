import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateProductTeam1702671777450 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'te100_pd100_team_product',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'team_id',
            type: 'uuid',
          },
          {
            name: 'product_id',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'ProductTeamId',
            columnNames: ['product_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'pd100_products',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          {
            name: 'TeamProductId',
            columnNames: ['team_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'te100_team',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('te100_pd100_team_product')
  }
}
