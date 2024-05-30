import { PartialType } from '@nestjs/swagger';
import { CreateTeachersAcademicCourseDto } from './create-teachers_academic_course.dto';

export class UpdateTeachersAcademicCourseDto extends PartialType(CreateTeachersAcademicCourseDto) {}
