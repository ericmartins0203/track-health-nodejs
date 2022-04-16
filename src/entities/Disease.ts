import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("diseases")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100, nullable: false, unique: true })
  name: string;
}
