import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto): Promise<any> {
    const res = await this.userService.create(createUserDto);
    return res;
  }
}
