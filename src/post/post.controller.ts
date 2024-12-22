import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getAllPosts() {
    return this.postService.getAllPosts();
  }

  @Post()
  async createPost(
    @Body()
    createPostDto: {
      title: string;
      content: string;
      authorId: string;
      categoryId: string;
    },
  ) {
    return this.postService.createPost(createPostDto);
  }

  @Get(':id')
  async getPostById(@Param('id') id: string) {
    return this.postService.getPostById(id);
  }
}
