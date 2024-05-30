import { Module } from '@nestjs/common';
import { AcademicPeriodsService } from './academic_periods.service';
import { AcademicPeriodsController } from './academic_periods.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcademicPeriod } from './entities/academic_period.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AcademicPeriod])],

  controllers: [AcademicPeriodsController],
  providers: [AcademicPeriodsService],
})
export class AcademicPeriodsModule {}
