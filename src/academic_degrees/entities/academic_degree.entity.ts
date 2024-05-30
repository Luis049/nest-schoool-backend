import { AcademicCourse } from "src/academic_courses/entities/academic_course_entity";
import { Group } from "src/groups/entities/group.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('academic_degrees')
export class AcademicDegree {
    @PrimaryGeneratedColumn()
    academic_degree_id: number;

    @Column()
    name: string;

    @OneToMany( () => AcademicCourse, academicCourse => academicCourse.academicDegree)
    academicCourse: AcademicCourse[];

    @OneToMany( () => Group, group => group.academicDegree)
    group: Group[];
}
