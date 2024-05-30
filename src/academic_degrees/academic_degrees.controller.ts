import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcademicDegreesService } from './academic_degrees.service';
import { CreateAcademicDegreeDto } from './dto/create-academic_degree.dto';
import { UpdateAcademicDegreeDto } from './dto/update-academic_degree.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('academic-degrees')
@Controller('academic-degrees')
export class AcademicDegreesController {
  constructor(private readonly academicDegreesService: AcademicDegreesService) {}

  @Post()
  create(@Body() createAcademicDegreeDto: CreateAcademicDegreeDto) {
    return this.academicDegreesService.create(createAcademicDegreeDto);
  }

  @Get()
  findAll() {
    return this.academicDegreesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.academicDegreesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcademicDegreeDto: UpdateAcademicDegreeDto) {
    return this.academicDegreesService.update(+id, updateAcademicDegreeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.academicDegreesService.remove(+id);
  }
}
