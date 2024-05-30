import { Module } from '@nestjs/common';
import { UsersTypesService } from './users_types.service';
import { UsersTypesController } from './users_types.controller';
import { UsersType } from './entities/users_type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UsersType])],
  controllers: [UsersTypesController],
  providers: [UsersTypesService],
})
export class UsersTypesModule {}
