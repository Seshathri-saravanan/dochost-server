import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Dialect } from 'sequelize/types';
import { UserModule } from './user/user.module';
import { UserprofileModule } from './userprofile/userprofile.module';
import { ProjectModule } from './project/project.module';
import { ProjectuserModule } from './projectuser/projectuser.module';
import { PageModule } from './page/page.module';
import { User } from './user/user.model';
import { UserProfile } from './userprofile/userprofile.model';
import { Project } from './project/project.model';
import { ProjectUser } from './projectuser/projectuser.model';
import { Page } from './page/page.model';

/*

*/

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'dochost',
      models: [User, UserProfile, Project, ProjectUser, Page],
      autoLoadModels: true,
      synchronize: true,
      sync: {
        force: true,
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    UserprofileModule,
    ProjectModule,
    ProjectuserModule,
    PageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
