import { Module } from '@nestjs/common';
import { TasksAcademicCoursesStudentsService } from './tasks_academic_courses_students.service';
import { TasksAcademicCoursesStudentsController } from './tasks_academic_courses_students.controller';
import { TasksAcademicCoursesStudent } from './entities/tasks_academic_courses_student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TasksAcademicCoursesStudent])],
  controllers: [TasksAcademicCoursesStudentsController],
  providers: [TasksAcademicCoursesStudentsService],
})
export class TasksAcademicCoursesStudentsModule {}
