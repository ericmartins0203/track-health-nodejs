import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 100, nullable: false })
  name: string;

  @Column({ length: 150, nullable: false, unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: false })
  birthDate: Date;

  @Column({ length: 50 })
  gender: Date;

  @Column({ length: 50 })
  sex: Date;
}
