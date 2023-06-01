import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1685453541405 implements MigrationInterface {
    name = 'CreateUser1685453541405'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "deleted_at" date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deleted_at"`);
    }

}
