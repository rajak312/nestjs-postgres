import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaClient) {}

  async getAllComments() {
    return this.prisma.comment.findMany({
      include: { author: true, post: true },
    });
  }

  async createComment(data: {
    content: string;
    authorId: string;
    postId: string;
    parentId?: string;
  }) {
    return this.prisma.comment.create({ data });
  }

  async getCommentById(id: string) {
    return this.prisma.comment.findUnique({
      where: { id },
      include: { author: true, post: true },
    });
  }
}
