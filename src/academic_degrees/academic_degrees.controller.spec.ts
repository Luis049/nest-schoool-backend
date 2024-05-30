import { Test, TestingModule } from '@nestjs/testing';
import { AcademicDegreesController } from './academic_degrees.controller';
import { AcademicDegreesService } from './academic_degrees.service';

describe('AcademicDegreesController', () => {
  let controller: AcademicDegreesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcademicDegreesController],
      providers: [AcademicDegreesService],
    }).compile();

    controller = module.get<AcademicDegreesController>(AcademicDegreesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
