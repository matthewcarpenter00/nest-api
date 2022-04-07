import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto, EditProductDto } from './dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  getProducts() {
    return this.prisma.product.findMany();
  }

  async getProductById(productId: number) {
    const product = await this.prisma.product.findFirst({
      where: { id: productId },
    });
    return product;
  }

  async createProduct(dto: CreateProductDto) {
    const product = await this.prisma.product.create({
      data: { ...dto },
    });
    return product;
  }

  async editProduct(productId: number, dto: EditProductDto) {
    const product = await this.prisma.product.update({
      where: { id: productId },
      data: {
        ...dto,
      },
    });
    return product;
  }
}
