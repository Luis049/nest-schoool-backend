import { PartialType } from '@nestjs/swagger';
import { CreateTeachersGroupsAcademicCourseDto } from './create-teachers_groups_academic_course.dto';

export class UpdateTeachersGroupsAcademicCourseDto extends PartialType(CreateTeachersGroupsAcademicCourseDto) {}
