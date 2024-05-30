import { PartialType } from '@nestjs/swagger';
import { CreateTasksAcademicCourseDto } from './create-tasks_academic_course.dto';

export class UpdateTasksAcademicCourseDto extends PartialType(CreateTasksAcademicCourseDto) {}
