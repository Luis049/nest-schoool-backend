import { AcademicCourse } from "src/academic_courses/entities/academic_course_entity";
import { AcademicPeriod } from "src/academic_periods/entities/academic_period.entity";
import { TasksAcademicCoursesStudent } from "src/tasks_academic_courses_students/entities/tasks_academic_courses_student.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks_academic_courses')
export class TasksAcademicCourse {
    @PrimaryGeneratedColumn()
    task_academic_course_id: number;

    @Column()
    name: string;

    
    @ManyToOne(() => AcademicCourse, academicCourse => academicCourse.taskAcademicCourses)
    @JoinColumn({ name: 'academic_course_id' })
    academicCourse: AcademicCourse;

    @ManyToOne(() => AcademicPeriod, academicPeriod => academicPeriod.tasksAcademicCourses)
    @JoinColumn({ name: 'academic_period_id' })
    academicPeriod: AcademicPeriod;

    @OneToMany(() => TasksAcademicCoursesStudent, tasksAcademicCoursesStudent => tasksAcademicCoursesStudent.tasksAcademicCourse)
    tasksAcademicCoursesStudents: TasksAcademicCoursesStudent[];

    
}
