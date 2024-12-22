import { Module } from '@nestjs/common';
import { CategoryController } from './category/category.controller';
import { CommentController } from './comment/comment.controller';
import { PostController } from './post/post.controller';
import { UserController } from './users/user.controller';
import { CategoryService } from './category/category.service';
import { CommentService } from './comment/comments.service';
import { PostService } from './post/post.service';
import { UserService } from './users/user.service';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [],
  controllers: [
    CategoryController,
    CommentController,
    PostController,
    UserController,
  ],
  providers: [
    CategoryService,
    CommentService,
    PostService,
    UserService,
    PrismaClient,
  ],
})
export class UserModule {}
