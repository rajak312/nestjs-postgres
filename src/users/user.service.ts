import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaClient) {}

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async createUser(data: { name: string; email: string }) {
    return this.prisma.user.create({ data });
  }

  async getUserById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }
}
