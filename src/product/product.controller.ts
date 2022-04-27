import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Delete,
} from '@nestjs/common';

import { ProductService } from './product.service';
import { CreateProductDto, EditProductDto } from './dto';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProductById(@Param('id', ParseIntPipe) id: number) {
    return this.productService.getProductById(id);
  }

  @Post()
  createProduct(@Body() dto: CreateProductDto) {
    return this.productService.createProduct(dto);
  }

  @Patch(':id')
  editProductById(
    @Body() dto: EditProductDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.productService.editProduct(id, dto);
  }

  @Delete(':id')
  deleteProductById(@Param('id', ParseIntPipe) id: number,) {
    return this.productService.deleteProduct(id);
  }
}
