import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    
    constructor(private readonly productService: ProductsService) {}
    
    @Get()
    async getAllProducts(): Promise<any[]> {
        const products = await this.productService.getAllProducts();
        return products;
    }

    @Get(':id')
    async getProduct(@Param('id') id: Number): Promise<Product> {
        const product = await this.productService.getProduct(id);
        return product;
    }

    @Post()
    async createProduct(@Body() newProduct: Product) {
        const result = await this.productService.createProduct(newProduct);
        // console.log('Our new product : ', result);
        return "Produit ajouté avec succès : \n" + result;
    }

    @Patch(':id')
    async updateProduct(@Param('id') id: Number, @Body() product: Product): Promise<Product> {
        const productUpdated = await this.productService.updateProduct(id, product);
        return productUpdated;
    }

    @Delete(':id')
    removeUser(@Param('id') id: Number) {
        return this.productService.deleteProduct(id);
    }
}

