import { IsOptional, IsString } from 'class-validator';

export class UpdateAcademicDegreeDto {
    @IsString()
    @IsOptional()
    name: string;
}
