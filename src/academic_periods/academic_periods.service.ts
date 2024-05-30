import { Injectable } from '@nestjs/common';
import { CreateAcademicPeriodDto } from './dto/create-academic_period.dto';
import { UpdateAcademicPeriodDto } from './dto/update-academic_period.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AcademicPeriod } from './entities/academic_period.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AcademicPeriodsService {
  constructor(
    @InjectRepository(AcademicPeriod)
    private readonly academicPeriodRepository: Repository<AcademicPeriod>,
  ) {}

  async create(createAcademicPeriodDto: CreateAcademicPeriodDto) {
    const academicPeriod = this.academicPeriodRepository.create(
      createAcademicPeriodDto,
    );
    return await this.academicPeriodRepository.save(academicPeriod);
  }

  async findAll() {
    return await this.academicPeriodRepository.find();
  }

  async findOne(id: number) {
    return await this.academicPeriodRepository.findOneBy({
      academic_period_id: id,
    });
  }

  async update(id: number, updateAcademicPeriodDto: UpdateAcademicPeriodDto) {
    return await this.academicPeriodRepository.update(
      id,
      updateAcademicPeriodDto,
    );
  }

  async remove(id: number) {
    return await this.academicPeriodRepository.delete(id);
  }
}
