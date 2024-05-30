import { Module } from '@nestjs/common';
import { TasksAcademicCoursesService } from './tasks_academic_courses.service';
import { TasksAcademicCoursesController } from './tasks_academic_courses.controller';
import { TasksAcademicCourse } from './entities/tasks_academic_course.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TasksAcademicCourse])],
  controllers: [TasksAcademicCoursesController],
  providers: [TasksAcademicCoursesService],
})
export class TasksAcademicCoursesModule {}
