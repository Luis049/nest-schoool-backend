import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeachersAcademicCoursesService } from './teachers_academic_courses.service';
import { CreateTeachersAcademicCourseDto } from './dto/create-teachers_academic_course.dto';
import { UpdateTeachersAcademicCourseDto } from './dto/update-teachers_academic_course.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('TeachersAcademicCourses')
@Controller('teachers-academic-courses')
export class TeachersAcademicCoursesController {
  constructor(private readonly teachersAcademicCoursesService: TeachersAcademicCoursesService) {}

  @Post()
  create(@Body() createTeachersAcademicCourseDto: CreateTeachersAcademicCourseDto) {
    return this.teachersAcademicCoursesService.create(createTeachersAcademicCourseDto);
  }

  @Get()
  findAll() {
    return this.teachersAcademicCoursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teachersAcademicCoursesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeachersAcademicCourseDto: UpdateTeachersAcademicCourseDto) {
    return this.teachersAcademicCoursesService.update(+id, updateTeachersAcademicCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teachersAcademicCoursesService.remove(+id);
  }
}
