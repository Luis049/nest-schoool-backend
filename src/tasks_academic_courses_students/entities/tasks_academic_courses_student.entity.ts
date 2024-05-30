import { TasksAcademicCourse } from "src/tasks_academic_courses/entities/tasks_academic_course.entity";
import { TeachersGroupsAcademicCourse } from "src/teachers_groups_academic_courses/entities/teachers_groups_academic_course.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks_academic_courses_students')
export class TasksAcademicCoursesStudent {
    @PrimaryGeneratedColumn()
    tasks_academic_courses_students_id: number;

    @Column()
    grade: number;

    @ManyToOne(() => TeachersGroupsAcademicCourse, teachersGroupsAcademicCourse => teachersGroupsAcademicCourse.tasksAcademicCoursesStudents)
    @JoinColumn({ name: 'teacher_group_academic_course_id' })
    teacherGroupsAcademicCourse: TeachersGroupsAcademicCourse;

    @ManyToOne(() => TasksAcademicCourse, tasksAcademicCourse => tasksAcademicCourse.tasksAcademicCoursesStudents)
    @JoinColumn({ name: 'task_academic_course_id' })
    tasksAcademicCourse: TasksAcademicCourse;

    @ManyToOne(() => User, user => user.tasksAcademicCoursesStudents)
    @JoinColumn({ name: 'user_id' })
    user: User;
}
