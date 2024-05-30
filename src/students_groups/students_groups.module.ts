import { Module } from '@nestjs/common';
import { StudentsGroupsService } from './students_groups.service';
import { StudentsGroupsController } from './students_groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsGroup } from './entities/students_group.entity';
import { Group } from 'src/groups/entities/group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentsGroup, Group])],
  controllers: [StudentsGroupsController],
  providers: [StudentsGroupsService],
})
export class StudentsGroupsModule {}
