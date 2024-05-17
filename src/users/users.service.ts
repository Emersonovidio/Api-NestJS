import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from './user.entity';
import { UserRole } from "./user-roles.enum";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  // async createAdminUser(createUserDto: CreateUserDto): Promise<User> {
  //   if (createUserDto.password != createUserDto.passwordConfirmation) {
  //     throw new UnprocessableEntityException("As senhas não conferem");
  //   } else {
  //     return this.usersRepository.createUser(createUserDto,
  //       UserRole.ADMIN,
  //     );
  //   }
  // }
  create(createUserDto: CreateUserDto): Promise<User> {
    const item = this.repository.create(createUserDto);
    return this.repository.save(item);
  }

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

}
