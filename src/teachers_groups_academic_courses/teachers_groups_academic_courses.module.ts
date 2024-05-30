import { Module } from '@nestjs/common';
import { TeachersGroupsAcademicCoursesService } from './teachers_groups_academic_courses.service';
import { TeachersGroupsAcademicCoursesController } from './teachers_groups_academic_courses.controller';
import { TeachersGroupsAcademicCourse } from './entities/teachers_groups_academic_course.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TeachersGroupsAcademicCourse])],
  controllers: [TeachersGroupsAcademicCoursesController],
  providers: [TeachersGroupsAcademicCoursesService],
})
export class TeachersGroupsAcademicCoursesModule {}
