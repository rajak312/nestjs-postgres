import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaClient) {}

  async getAllPosts() {
    return this.prisma.post.findMany({
      include: { author: true, category: true },
    });
  }

  async createPost(data: {
    title: string;
    content: string;
    authorId: string;
    categoryId: string;
  }) {
    return this.prisma.post.create({ data });
  }

  async getPostById(id: string) {
    return this.prisma.post.findUnique({
      where: { id },
      include: { author: true, category: true },
    });
  }
}
