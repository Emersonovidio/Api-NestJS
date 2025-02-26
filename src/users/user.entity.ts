import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";

@Entity()
@Unique(["email"])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false, type: "varchar", length: 200 })
  email: string;

  @Column({ nullable: false, type: "varchar", length: 200 })
  name: string;

  @Column({ nullable: true, type: "varchar", length: 20 })
  role: string;

  @Column({ nullable: true, default: true })
  status: boolean;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: true })
  salt: string;

  @Column({ nullable: true, type: "varchar", length: 64 })
  confirmationToken: string;

  @Column({ nullable: true, type: "varchar", length: 64 })
  recoverToken: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
