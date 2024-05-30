import { PartialType } from '@nestjs/swagger';
import { CreateStudentsGroupDto } from './create-students_group.dto';

export class UpdateStudentsGroupDto extends PartialType(CreateStudentsGroupDto) {}
