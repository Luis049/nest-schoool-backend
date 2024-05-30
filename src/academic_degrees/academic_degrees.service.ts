import { Injectable } from '@nestjs/common';
import { CreateAcademicDegreeDto } from './dto/create-academic_degree.dto';
import { UpdateAcademicDegreeDto } from './dto/update-academic_degree.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AcademicDegree } from './entities/academic_degree.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AcademicDegreesService {

  constructor(
    @InjectRepository(AcademicDegree)
    private readonly academicDegreeRepository: Repository<AcademicDegree>,
  ) {}

  async create(createAcademicDegreeDto: CreateAcademicDegreeDto) {
    const academicDegree = this.academicDegreeRepository.create(createAcademicDegreeDto);
    return await this.academicDegreeRepository.save(academicDegree);
  }

  async findAll() {
    return await this.academicDegreeRepository.find();
  }

  async findOne(id: number) {
    return await this.academicDegreeRepository.findOneBy({ academic_degree_id: id });
    }

  async update(id: number, updateAcademicDegreeDto: UpdateAcademicDegreeDto) {
    return await this.academicDegreeRepository.update(id, updateAcademicDegreeDto); 
  }

  async remove(id: number) {
    return await this.academicDegreeRepository.delete(id);
  }
}
