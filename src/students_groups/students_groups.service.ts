import { Injectable } from '@nestjs/common';
import { CreateStudentsGroupDto } from './dto/create-students_group.dto';
import { UpdateStudentsGroupDto } from './dto/update-students_group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentsGroup } from './entities/students_group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsGroupsService {

  constructor(

    @InjectRepository(StudentsGroup)

    private readonly studentsGroupRepository: Repository<StudentsGroup>,

  ) {}
  create(createStudentsGroupDto: CreateStudentsGroupDto) {
    return 'This action adds a new studentsGroup';
  }

  async findAll() {
    return await this.studentsGroupRepository.find({
      relations: ['group', 'user'],});
  }

  findOne(id: number) {
    return `This action returns a #${id} studentsGroup`;
  }

  update(id: number, updateStudentsGroupDto: UpdateStudentsGroupDto) {
    return `This action updates a #${id} studentsGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentsGroup`;
  }
}
