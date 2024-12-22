import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CommentService } from './comments.service';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async getAllComments() {
    return this.commentService.getAllComments();
  }

  @Post()
  async createComment(
    @Body()
    createCommentDto: {
      content: string;
      authorId: string;
      postId: string;
      parentId?: string;
    },
  ) {
    return this.commentService.createComment(createCommentDto);
  }

  @Get(':id')
  async getCommentById(@Param('id') id: string) {
    return this.commentService.getCommentById(id);
  }
}
