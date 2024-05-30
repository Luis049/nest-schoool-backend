import { Module } from '@nestjs/common';
import { AcademicDegreesService } from './academic_degrees.service';
import { AcademicDegreesController } from './academic_degrees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcademicDegree } from './entities/academic_degree.entity';
import { AcademicCourse } from 'src/academic_courses/entities/academic_course_entity';

@Module({
  imports: [TypeOrmModule.forFeature([AcademicDegree])],
  controllers: [AcademicDegreesController],
  providers: [AcademicDegreesService],
})
export class AcademicDegreesModule {}
