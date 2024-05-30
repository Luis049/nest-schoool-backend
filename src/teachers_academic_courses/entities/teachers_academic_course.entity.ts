import { AcademicCourse } from "src/academic_courses/entities/academic_course_entity";
import { User } from "src/users/entities/user.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('teachers_academic_courses')
export class TeachersAcademicCourse {

    @PrimaryGeneratedColumn()
    teacher_academic_course_id: number;

    @ManyToOne(() => User, (user) => user.teachersAcademicCourses)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => AcademicCourse,academicCourse => academicCourse.teachersAcademicCourses)
    @JoinColumn({ name: 'academic_course_id' })
    academicCourse: AcademicCourse;


}
