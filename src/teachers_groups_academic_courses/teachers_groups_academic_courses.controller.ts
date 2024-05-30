import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeachersGroupsAcademicCoursesService } from './teachers_groups_academic_courses.service';
import { CreateTeachersGroupsAcademicCourseDto } from './dto/create-teachers_groups_academic_course.dto';
import { UpdateTeachersGroupsAcademicCourseDto } from './dto/update-teachers_groups_academic_course.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('teachers-groups-academic-courses')
@Controller('teachers-groups-academic-courses')
export class TeachersGroupsAcademicCoursesController {
  constructor(private readonly teachersGroupsAcademicCoursesService: TeachersGroupsAcademicCoursesService) {}

  @Post()
  create(@Body() createTeachersGroupsAcademicCourseDto: CreateTeachersGroupsAcademicCourseDto) {
    return this.teachersGroupsAcademicCoursesService.create(createTeachersGroupsAcademicCourseDto);
  }

  @Get()
  findAll() {
    return this.teachersGroupsAcademicCoursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teachersGroupsAcademicCoursesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeachersGroupsAcademicCourseDto: UpdateTeachersGroupsAcademicCourseDto) {
    return this.teachersGroupsAcademicCoursesService.update(+id, updateTeachersGroupsAcademicCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teachersGroupsAcademicCoursesService.remove(+id);
  }
}
