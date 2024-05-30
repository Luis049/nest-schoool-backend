import { Group } from "src/groups/entities/group.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('students_groups')
export class StudentsGroup {
    @PrimaryGeneratedColumn()
    student_group_id: number;


    @ManyToOne(() => Group, group => group.studentsGroups)
    @JoinColumn({ name: 'group_id' })
    group: Group[];

    @ManyToOne(() => User, user => user.studentsGroups)
    @JoinColumn({ name: 'user_id' })
    user: User[];


}
