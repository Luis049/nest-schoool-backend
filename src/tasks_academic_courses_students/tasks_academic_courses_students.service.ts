import { Injectable } from '@nestjs/common';
import { CreateTasksAcademicCoursesStudentDto } from './dto/create-tasks_academic_courses_student.dto';
import { UpdateTasksAcademicCoursesStudentDto } from './dto/update-tasks_academic_courses_student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksAcademicCoursesStudent } from './entities/tasks_academic_courses_student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksAcademicCoursesStudentsService {

  constructor(

    @InjectRepository(TasksAcademicCoursesStudent)

    private readonly tasksAcademicCoursesStudentRepository: Repository<TasksAcademicCoursesStudent>,

  ) {}

  create(createTasksAcademicCoursesStudentDto: CreateTasksAcademicCoursesStudentDto) {
    return 'This action adds a new tasksAcademicCoursesStudent';
  }

  async findAll() {
    const results = await this.tasksAcademicCoursesStudentRepository.find({
      relations: ['teacherGroupsAcademicCourse', 'tasksAcademicCourse', 'user'],})
    console.log(results)
    return results;
  }

  findOne(id: number) {
    return `This action returns a #${id} tasksAcademicCoursesStudent`;
  }

  update(id: number, updateTasksAcademicCoursesStudentDto: UpdateTasksAcademicCoursesStudentDto) {
    return `This action updates a #${id} tasksAcademicCoursesStudent`;
  }

  remove(id: number) {
    return `This action removes a #${id} tasksAcademicCoursesStudent`;
  }
}
