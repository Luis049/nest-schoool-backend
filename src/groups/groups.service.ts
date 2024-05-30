import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
  ) {}

  async create(createGroupDto: CreateGroupDto) {
    const group = this.groupRepository.create(createGroupDto);
    return await this.groupRepository.save(group);
  }

  async findAll() {
    return await this.groupRepository.find({
      relations: ['academicDegree'],});
  }

  async findOne(id: number) {
    return await this.groupRepository.findOneBy({ group_id: id });
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    return await this.groupRepository.update(id, updateGroupDto);
  }

  async remove(id: number) {
    return await this.groupRepository.delete(id);
  }
}
