import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { User } from "./User";

@Entity("anamnesis")
export class Anamnesis {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  diseases: boolean;

  @Column()
  allergy: boolean;

  @Column()
  continuousMedications: boolean;

  @Column()
  surgery: boolean;

  @Column()
  alcoholic: boolean;

  @Column()
  drugUser: boolean;

  @Column()
  smoker: boolean;

  @Column()
  physicalActivity: boolean;

  @Column()
  diabetes: boolean;

  @Column()
  hipertension: boolean;

  @OneToOne(() => User, { nullable: false })
  @JoinColumn()
  user: User;
}
