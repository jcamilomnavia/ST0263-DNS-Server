import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [];
  private idCounter = 0;

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
  async create(user) {
    if ((await this.userExists(user)).length === 0) {
      this.idCounter += 1;
      const newUser = { ...user, id: this.idCounter };
      this.users.push(newUser);
      return newUser;
    }
    throw new HttpException('User already exists', HttpStatus.UNAUTHORIZED);
  }
  async userExists(user) {
    return this.users.filter((item) => item.username === user.username);
  }
}
