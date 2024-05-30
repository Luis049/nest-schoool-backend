import { Injectable } from '@nestjs/common';
import { CreateTasksAcademicCourseDto } from './dto/create-tasks_academic_course.dto';
import { UpdateTasksAcademicCourseDto } from './dto/update-tasks_academic_course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksAcademicCourse } from './entities/tasks_academic_course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksAcademicCoursesService {

  constructor(

    @InjectRepository(TasksAcademicCourse)

    private readonly tasksAcademicCourseRepository: Repository<TasksAcademicCourse>,

  ) {}
  create(createTasksAcademicCourseDto: CreateTasksAcademicCourseDto) {
    return 'This action adds a new tasksAcademicCourse';
  }

  async findAll() {
    return await this.tasksAcademicCourseRepository.find({'relations': ['academicCourse', 'academicPeriod']});
  }

  findOne(id: number) {
    return `This action returns a #${id} tasksAcademicCourse`;
  }

  update(id: number, updateTasksAcademicCourseDto: UpdateTasksAcademicCourseDto) {
    return `This action updates a #${id} tasksAcademicCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} tasksAcademicCourse`;
  }
}
