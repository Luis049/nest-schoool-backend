import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('users_types')
export class UsersType {
    @PrimaryGeneratedColumn()
    user_type_id: number;

    @Column()
    name: string;

    @OneToOne(() => User, user => user.usersType)
    users: User
}
