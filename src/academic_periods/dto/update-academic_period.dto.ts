import { PartialType } from '@nestjs/swagger';
import { CreateAcademicPeriodDto } from './create-academic_period.dto';

export class UpdateAcademicPeriodDto extends PartialType(CreateAcademicPeriodDto) {}
