import { Injectable } from '@nestjs/common';
import { CreateTeachersAcademicCourseDto } from './dto/create-teachers_academic_course.dto';
import { UpdateTeachersAcademicCourseDto } from './dto/update-teachers_academic_course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TeachersAcademicCourse } from './entities/teachers_academic_course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeachersAcademicCoursesService {

 constructor(

  @InjectRepository(TeachersAcademicCourse)

  private readonly teachersAcademicCourseRepository: Repository<TeachersAcademicCourse>,

 ) {}

  create(createTeachersAcademicCourseDto: CreateTeachersAcademicCourseDto) {
    return 'This action adds a new teachersAcademicCourse';
  }

  async findAll() {
    return await this.teachersAcademicCourseRepository.find({['relations']: ['user', 'academicCourse']});
    // console.log(results)
    // return results
  }

  findOne(id: number) {
    return `This action returns a #${id} teachersAcademicCourse`;
  }

  update(id: number, updateTeachersAcademicCourseDto: UpdateTeachersAcademicCourseDto) {
    return `This action updates a #${id} teachersAcademicCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} teachersAcademicCourse`;
  }
}
