import { Body, Controller, Get, Post } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Get()
    findAll(): Product[] {
        return this.productService.getAllProducts();
    }

    @Post()
    createProduct(@Body() newProduct: Product) {
        this.productService.createProduct(newProduct);
    }
}
