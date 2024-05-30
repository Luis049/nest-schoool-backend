import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcademicCoursesController } from './academic_courses.controller';
import { AcademicCoursesService } from './academic_courses.service';
import { AcademicCourse } from './entities/academic_course_entity';
import { AcademicDegree } from 'src/academic_degrees/entities/academic_degree.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AcademicCourse, AcademicDegree])],
  controllers: [AcademicCoursesController],
  providers: [AcademicCoursesService],
})
export class AcademicCoursesModule {}
