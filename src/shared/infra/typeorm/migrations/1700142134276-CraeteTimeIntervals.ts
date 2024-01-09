import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm'

export class CraeteTimeIntervals1700142134276 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'pr100_time_intervals',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'professional_id',
            type: 'uuid',
          },
          {
            name: 'week_day',
            type: 'int',
          },
          {
            name: 'time_start_in_minutes_one',
            type: 'int',
          },
          {
            name: 'time_end_in_minutes_one',
            type: 'int',
          },
          {
            name: 'time_start_in_minutes_two',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'time_end_in_minutes_two',
            type: 'int',
            isNullable: true,
          },
        ],
      }),
    )

    await queryRunner.createIndex(
      'pr100_time_intervals',
      new TableIndex({
        name: 'time_intervals_professional_id',
        columnNames: ['professional_id'],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropIndex(
      'pr100_time_intervals',
      'time_intervals_professional_id',
    )
    await queryRunner.dropTable('pr100_time_intervals')
  }
}
