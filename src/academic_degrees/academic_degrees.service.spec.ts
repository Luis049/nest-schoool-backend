import { Test, TestingModule } from '@nestjs/testing';
import { AcademicDegreesService } from './academic_degrees.service';

describe('AcademicDegreesService', () => {
  let service: AcademicDegreesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcademicDegreesService],
    }).compile();

    service = module.get<AcademicDegreesService>(AcademicDegreesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
