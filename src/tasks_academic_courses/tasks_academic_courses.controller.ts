import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksAcademicCoursesService } from './tasks_academic_courses.service';
import { CreateTasksAcademicCourseDto } from './dto/create-tasks_academic_course.dto';
import { UpdateTasksAcademicCourseDto } from './dto/update-tasks_academic_course.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tasks-academic-courses')
@Controller('tasks-academic-courses')
export class TasksAcademicCoursesController {
  constructor(private readonly tasksAcademicCoursesService: TasksAcademicCoursesService) {}

  @Post()
  create(@Body() createTasksAcademicCourseDto: CreateTasksAcademicCourseDto) {
    return this.tasksAcademicCoursesService.create(createTasksAcademicCourseDto);
  }

  @Get()
  findAll() {
    return this.tasksAcademicCoursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksAcademicCoursesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTasksAcademicCourseDto: UpdateTasksAcademicCourseDto) {
    return this.tasksAcademicCoursesService.update(+id, updateTasksAcademicCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksAcademicCoursesService.remove(+id);
  }
}
