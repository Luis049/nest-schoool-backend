import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAcademicCourseDto } from './dto/create-academic_course.dto';
import { UpdateAcademicCourseDto } from './dto/update-academic_course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AcademicCourse } from './entities/academic_course_entity';

@Injectable()
export class AcademicCoursesService {
  constructor(
    @InjectRepository(AcademicCourse)
    private academicCourseRepository: Repository<AcademicCourse>,
  ) {}

  async create(createAcademicCourseDto: CreateAcademicCourseDto) {
    const academicCourse = this.academicCourseRepository.create(
      createAcademicCourseDto,
    );
    return await this.academicCourseRepository.save(academicCourse);
  }

  async findAll() {
    return await this.academicCourseRepository.find({
      relations: ['academicDegree'],}); 
  }

  async findOne(id: number) {
    return await this.academicCourseRepository.findOneBy({
      academic_course_id: id,
    });
  }

  async update(id: number, updateAcademicCourseDto: UpdateAcademicCourseDto) {
    return await this.academicCourseRepository.update(
      id,
      updateAcademicCourseDto,
    );
  }

  async remove(id: number) {
    const academicCourse = await this.findOne(id);
    if (!academicCourse) {
      throw new NotFoundException();
    }
    return await this.academicCourseRepository.delete(academicCourse);
  }
}
