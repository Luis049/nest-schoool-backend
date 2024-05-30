import { AcademicDegree } from "src/academic_degrees/entities/academic_degree.entity";
import { StudentsGroup } from "src/students_groups/entities/students_group.entity";
import { TeachersGroupsAcademicCourse } from "src/teachers_groups_academic_courses/entities/teachers_groups_academic_course.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('groups')
export class Group {
    @PrimaryGeneratedColumn()
    group_id: number;

    @Column()
    name: string;

    @ManyToOne(() => AcademicDegree, academicDegree => academicDegree.academicCourse)
    @JoinColumn({ name: 'academic_degree_id' }) // Nombre de la llave foranea
    academicDegree: AcademicDegree[];

    @OneToMany(() =>  StudentsGroup, studentsGroup => studentsGroup.group)
    studentsGroups: StudentsGroup[];

    @OneToMany(() =>  TeachersGroupsAcademicCourse, teachersGroupsAcademicCourse => teachersGroupsAcademicCourse.group)
    teachersGroupsAcademicCourse: TeachersGroupsAcademicCourse[];

}
