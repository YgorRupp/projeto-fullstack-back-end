import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./users.entity";
import { getRounds, hashSync } from "bcryptjs";

@Entity()
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", length: 45 })
  email: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @Column({ type: "varchar", length: 20 })
  phone: string;

  @CreateDateColumn({ type: "date" })
  created_at: string;

  @DeleteDateColumn({ type: "date" })
  deleted_at: string;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User | null;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isHashed = getRounds(this.password);
    if (!isHashed) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export { Contact };
