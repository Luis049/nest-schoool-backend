import { Test, TestingModule } from '@nestjs/testing';
import { TeachersGroupsAcademicCoursesService } from './teachers_groups_academic_courses.service';

describe('TeachersGroupsAcademicCoursesService', () => {
  let service: TeachersGroupsAcademicCoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeachersGroupsAcademicCoursesService],
    }).compile();

    service = module.get<TeachersGroupsAcademicCoursesService>(TeachersGroupsAcademicCoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
