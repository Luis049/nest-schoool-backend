import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AcademicCoursesModule } from './academic_courses/academic_courses.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CONFIG_DATABASE } from './config.database';
import { AcademicDegreesModule } from './academic_degrees/academic_degrees.module';
import { AcademicPeriodsModule } from './academic_periods/academic_periods.module';
import { GroupsModule } from './groups/groups.module';
import { UsersModule } from './users/users.module';
import { UsersTypesModule } from './users_types/users_types.module';
import { StudentsGroupsModule } from './students_groups/students_groups.module';
import { TasksAcademicCoursesModule } from './tasks_academic_courses/tasks_academic_courses.module';
import { TasksAcademicCoursesStudentsModule } from './tasks_academic_courses_students/tasks_academic_courses_students.module';
import { TeachersAcademicCoursesModule } from './teachers_academic_courses/teachers_academic_courses.module';
import { TeachersGroupsAcademicCoursesModule } from './teachers_groups_academic_courses/teachers_groups_academic_courses.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CONFIG_DATABASE(),
    AcademicCoursesModule,
    AcademicDegreesModule,
    AcademicPeriodsModule,
    GroupsModule,
    StudentsGroupsModule,
    TasksAcademicCoursesModule,
    TasksAcademicCoursesStudentsModule,
    UsersModule,
    UsersTypesModule,
    TeachersAcademicCoursesModule,
    TeachersGroupsAcademicCoursesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
