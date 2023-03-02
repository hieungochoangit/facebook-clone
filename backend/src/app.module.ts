import { DATABASE_CONFIG } from './config/config';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forRoot(DATABASE_CONFIG), UserModule],
  controllers: [UserController],
  providers: []
})
export class AppModule {}
