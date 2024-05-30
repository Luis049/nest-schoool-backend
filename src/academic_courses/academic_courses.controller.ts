import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcademicCoursesService } from './academic_courses.service';
import { CreateAcademicCourseDto } from './dto/create-academic_course.dto';
import { UpdateAcademicCourseDto } from './dto/update-academic_course.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('academic-courses')
@Controller('academic-courses')
export class AcademicCoursesController {
  constructor(private readonly academicCoursesService: AcademicCoursesService) {}

  @Post()
  create(@Body() createAcademicCourseDto: CreateAcademicCourseDto) {
    return this.academicCoursesService.create(createAcademicCourseDto);
  }

  @Get()
  findAll() {
    return this.academicCoursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.academicCoursesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAcademicCourseDto: UpdateAcademicCourseDto) {
    return this.academicCoursesService.update(id, updateAcademicCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.academicCoursesService.remove(id);
  }
}
