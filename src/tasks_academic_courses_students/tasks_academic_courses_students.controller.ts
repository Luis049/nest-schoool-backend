import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksAcademicCoursesStudentsService } from './tasks_academic_courses_students.service';
import { CreateTasksAcademicCoursesStudentDto } from './dto/create-tasks_academic_courses_student.dto';
import { UpdateTasksAcademicCoursesStudentDto } from './dto/update-tasks_academic_courses_student.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tasks-academic-courses-students')
@Controller('tasks-academic-courses-students')
export class TasksAcademicCoursesStudentsController {
  constructor(private readonly tasksAcademicCoursesStudentsService: TasksAcademicCoursesStudentsService) {}

  @Post()
  create(@Body() createTasksAcademicCoursesStudentDto: CreateTasksAcademicCoursesStudentDto) {
    return this.tasksAcademicCoursesStudentsService.create(createTasksAcademicCoursesStudentDto);
  }

  @Get()
  findAll() {
    return this.tasksAcademicCoursesStudentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksAcademicCoursesStudentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTasksAcademicCoursesStudentDto: UpdateTasksAcademicCoursesStudentDto) {
    return this.tasksAcademicCoursesStudentsService.update(+id, updateTasksAcademicCoursesStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksAcademicCoursesStudentsService.remove(+id);
  }
}
