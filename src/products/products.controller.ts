import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    
    constructor(private readonly productService: ProductsService) {}
    
    @Get()
    findAll(): Product[] {
        return this.productService.getAllProducts();
    }
    
    @Get('products/id')
    findProductById(@Param() id: number): Product {
        const product = this.productService.getProductById(id);
        console.log(product);
        return product;
    }

    @Post()
    createProduct(@Body() newProduct: Product) {
        this.productService.createProduct(newProduct);
    }
}
