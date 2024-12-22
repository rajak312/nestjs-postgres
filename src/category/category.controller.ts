import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAllCategories() {
    return this.categoryService.getAllCategories();
  }

  @Post()
  async createCategory(@Body() createCategoryDto: { name: string }) {
    return this.categoryService.createCategory(createCategoryDto);
  }
}
