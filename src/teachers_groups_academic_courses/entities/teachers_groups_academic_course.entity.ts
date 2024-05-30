import { group } from "console";
import { AcademicCourse } from "src/academic_courses/entities/academic_course_entity";
import { Group } from "src/groups/entities/group.entity";
import { TasksAcademicCoursesStudent } from "src/tasks_academic_courses_students/entities/tasks_academic_courses_student.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('teachers_groups_academic_courses')
export class TeachersGroupsAcademicCourse {
    @PrimaryGeneratedColumn()
    teacher_group_academic_course_id: number;

    @OneToMany(() => TasksAcademicCoursesStudent, tasksAcademicCoursesStudent => tasksAcademicCoursesStudent.teacherGroupsAcademicCourse)
    tasksAcademicCoursesStudents: TasksAcademicCoursesStudent[];

    @ManyToOne(() => AcademicCourse, academicCourse => academicCourse.teachersAcademicCourses)
    @JoinColumn({name: 'academic_course_id'})
    academicCourse: AcademicCourse;

    @ManyToOne(() => Group, group => group.teachersGroupsAcademicCourse)
    @JoinColumn({name: 'group_id'})
    group: Group;

    @ManyToOne(() => User, user => user.teachersGroupsAcademicCourse)
    @JoinColumn({name: 'user_id'})  
    user: User;
}
