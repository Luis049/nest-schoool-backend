import { Module } from '@nestjs/common';
import { TeachersAcademicCoursesService } from './teachers_academic_courses.service';
import { TeachersAcademicCoursesController } from './teachers_academic_courses.controller';
import { TeachersAcademicCourse } from './entities/teachers_academic_course.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TeachersAcademicCourse])],
  controllers: [TeachersAcademicCoursesController],
  providers: [TeachersAcademicCoursesService],
})
export class TeachersAcademicCoursesModule {}
