import { TasksAcademicCourse } from "src/tasks_academic_courses/entities/tasks_academic_course.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('academic_periods')
export class AcademicPeriod {
    @PrimaryGeneratedColumn()
    academic_period_id: Number;

    @Column()
    description: string;

    @Column()
    percentage: number;

    @OneToMany(() => TasksAcademicCourse, tasksAcademicCourse => tasksAcademicCourse.academicPeriod)
    tasksAcademicCourses: TasksAcademicCourse[];
    
}
