import { Injectable } from '@nestjs/common';
import { CreateUsersTypeDto } from './dto/create-users_type.dto';
import { UpdateUsersTypeDto } from './dto/update-users_type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersType } from './entities/users_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersTypesService {

  constructor(
    @InjectRepository(UsersType)

    private usersTypeRepository: Repository<UsersType>,

  ) {}

   async create(createUsersTypeDto: CreateUsersTypeDto) {
    const usersType = this.usersTypeRepository.create(createUsersTypeDto);
     return await this.usersTypeRepository.save(usersType);
  }

  async findAll() {
    return await this.usersTypeRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} usersType`;
  }

  update(id: number, updateUsersTypeDto: UpdateUsersTypeDto) {
    return `This action updates a #${id} usersType`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersType`;
  }
}
