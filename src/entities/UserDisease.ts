import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("UserDiseases")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 250, nullable: false, unique: true })
  description: string;

  @Column({ type: "varchar", length: 250, nullable: false, unique: true })
  medication: string;
}
