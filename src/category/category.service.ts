import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaClient) {}

  async getAllCategories() {
    return this.prisma.category.findMany();
  }

  async createCategory(data: { name: string }) {
    return this.prisma.category.create({ data });
  }
}
