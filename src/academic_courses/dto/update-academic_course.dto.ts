import { PartialType } from '@nestjs/swagger';
import { CreateAcademicCourseDto } from './create-academic_course.dto';

export class UpdateAcademicCourseDto extends PartialType(CreateAcademicCourseDto) {}
