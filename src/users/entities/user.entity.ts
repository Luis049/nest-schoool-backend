import { StudentsGroup } from 'src/students_groups/entities/students_group.entity';
import { TasksAcademicCoursesStudent } from 'src/tasks_academic_courses_students/entities/tasks_academic_courses_student.entity';
import { TeachersAcademicCourse } from 'src/teachers_academic_courses/entities/teachers_academic_course.entity';
import { TeachersGroupsAcademicCourse } from 'src/teachers_groups_academic_courses/entities/teachers_groups_academic_course.entity';
import { UsersType } from 'src/users_types/entities/users_type.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: number;

  @Column()
  address: string;

  @Column({ nullable: false })
  password: string;

  @Column()
  status: string;


  @OneToOne(() =>  StudentsGroup, studentsGroup => studentsGroup.user)
  studentsGroups: StudentsGroup[];

  @OneToMany(() => TasksAcademicCoursesStudent, tasksAcademicCoursesStudent => tasksAcademicCoursesStudent.user)
  tasksAcademicCoursesStudents: TasksAcademicCoursesStudent[];

  @OneToOne(() => UsersType, usersType => usersType.users)
  @JoinColumn({ name: 'user_type_id' })
  usersType: UsersType;

  @OneToMany(() => TeachersAcademicCourse, teachersAcademicCourse => teachersAcademicCourse.user)
  teachersAcademicCourses: TeachersAcademicCourse[];

  @OneToMany(() => TeachersGroupsAcademicCourse, teachersGroupsAcademicCourse => teachersGroupsAcademicCourse.user)
  teachersGroupsAcademicCourse: TeachersGroupsAcademicCourse[];

}
