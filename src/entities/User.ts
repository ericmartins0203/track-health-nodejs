import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100, nullable: false })
  name: string;

  @Column({ type: "varchar",length: 150, nullable: false, unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: false })
  birthDate: Date;

  @Column({ type: "varchar",length: 50 })
  gender: Date;

  @Column({ type: "varchar",length: 50 })
  sex: Date;
}
