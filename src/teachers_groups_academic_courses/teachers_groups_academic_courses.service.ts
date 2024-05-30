import { Injectable } from '@nestjs/common';
import { CreateTeachersGroupsAcademicCourseDto } from './dto/create-teachers_groups_academic_course.dto';
import { UpdateTeachersGroupsAcademicCourseDto } from './dto/update-teachers_groups_academic_course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TeachersGroupsAcademicCourse } from './entities/teachers_groups_academic_course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeachersGroupsAcademicCoursesService {

  constructor(

    @InjectRepository(TeachersGroupsAcademicCourse)

    private readonly teachersGroupsAcademicCoursesRepository: Repository<TeachersGroupsAcademicCourse>,

  ) {}
  create(createTeachersGroupsAcademicCourseDto: CreateTeachersGroupsAcademicCourseDto) {
    return 'This action adds a new teachersGroupsAcademicCourse';
  }

  async findAll() {
    return await this.teachersGroupsAcademicCoursesRepository.find({
      relations: ['academicCourse', 'group', 'user' ],});
  }

  findOne(id: number) {
    return `This action returns a #${id} teachersGroupsAcademicCourse`;
  }

  update(id: number, updateTeachersGroupsAcademicCourseDto: UpdateTeachersGroupsAcademicCourseDto) {
    return `This action updates a #${id} teachersGroupsAcademicCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} teachersGroupsAcademicCourse`;
  }
}
