import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm'

export class CreateProfessional1700101536606 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'pr100_professional',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'team_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'function',
            type: 'varchar',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'invite',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'actived',
            type: 'boolean',
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
            name: 'ProfessionalUserId',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onUpdate: 'SET NULL',
            onDelete: 'SET NULL',
          },
          {
            name: 'ProfessionalTeamId',
            columnNames: ['team_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'te100_team',
            onUpdate: 'SET NULL',
            onDelete: 'SET NULL',
          },
        ],
      }),
    )

    await queryRunner.createIndex(
      'pr100_professional',
      new TableIndex({
        name: 'index_pr100_professional_user_id',
        columnNames: ['user_id'],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropIndex(
      'pr100_professional',
      'index_pr100_professional_user_id',
    )
    await queryRunner.dropTable('pr100_professional')
  }
}
