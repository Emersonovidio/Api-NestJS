import { Body, Controller, Post, Get } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ReturnUserDto } from "./dto/return-user.dto";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // @Post()
  // async createAdminUser(
  //   @Body() createUserDto: CreateUserDto,
  // ): Promise<ReturnUserDto> {
  //   const user = await this.usersService.createAdminUser(createUserDto);
  //   return {
  //     user,
  //     message: "Administrador cadastrado com sucesso",
  //   };
  // }
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
