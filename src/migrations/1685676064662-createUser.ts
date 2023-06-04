import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1685676064662 implements MigrationInterface {
    name = 'CreateUser1685676064662'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ADD "created_at" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "deleted_at" date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "created_at"`);
    }

}
