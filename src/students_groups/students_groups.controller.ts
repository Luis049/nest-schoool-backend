import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentsGroupsService } from './students_groups.service';
import { CreateStudentsGroupDto } from './dto/create-students_group.dto';
import { UpdateStudentsGroupDto } from './dto/update-students_group.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('students-groups')
@Controller('students-groups')
export class StudentsGroupsController {
  constructor(private readonly studentsGroupsService: StudentsGroupsService) {}

  @Post()
  create(@Body() createStudentsGroupDto: CreateStudentsGroupDto) {
    return this.studentsGroupsService.create(createStudentsGroupDto);
  }

  @Get()
  findAll() {
    return this.studentsGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsGroupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentsGroupDto: UpdateStudentsGroupDto) {
    return this.studentsGroupsService.update(+id, updateStudentsGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsGroupsService.remove(+id);
  }
}
