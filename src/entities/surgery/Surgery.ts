import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { UserSurgery } from "./UserSurgery";

@Entity("surgery")
export class Surgery {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", nullable: false })
  name: string;

  @OneToMany(() => UserSurgery, (userSurgery) => userSurgery.surgery)
  userSurgery: UserSurgery[];
}
