import { AcademicDegree } from 'src/academic_degrees/entities/academic_degree.entity';
import { TasksAcademicCourse } from 'src/tasks_academic_courses/entities/tasks_academic_course.entity';
import { TeachersAcademicCourse } from 'src/teachers_academic_courses/entities/teachers_academic_course.entity';
import { TeachersGroupsAcademicCourse } from 'src/teachers_groups_academic_courses/entities/teachers_groups_academic_course.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity('academic_courses')
export class AcademicCourse {
  @PrimaryGeneratedColumn()
  academic_course_id: number;

  @Column()
  name: string;

  @ManyToOne(
    () => AcademicDegree,
    (academicDegree) => academicDegree.academicCourse,
  )
  @JoinColumn({ name: 'academic_degree_id' }) // Nombre de la llave foranea
  academicDegree: AcademicDegree[];


  @OneToMany(() => TasksAcademicCourse,tasksAcademicCourse => tasksAcademicCourse.academicCourse)
  taskAcademicCourses: TasksAcademicCourse[];

  @OneToMany(() => TeachersAcademicCourse,teachersAcademicCourse => teachersAcademicCourse.academicCourse)
  teachersAcademicCourses: TeachersAcademicCourse[];

  @OneToMany(() => TeachersGroupsAcademicCourse, teachersGroupsAcademicCourse => teachersGroupsAcademicCourse.academicCourse)
  teachersGroupsAcademicCourse: TeachersGroupsAcademicCourse[];
  
}
