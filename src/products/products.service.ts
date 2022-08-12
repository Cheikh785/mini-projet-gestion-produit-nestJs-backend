import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
    products: Product[] = [
        {
            id: 1,
            name: 'Chaise',
            price: 15000,
            quantity: 2,
            image: ''
        },
        {
            id: 2,
            name: 'Sac à main',
            price: 25000,
            quantity: 1,
            image: ''
        },
        {
            id: 3,
            name: 'Fenêtre',
            price: 35000,
            quantity: 3,
            image: ''
        }
    ]

    getAllProducts(): Product[] {
        return this.products;
    }

    getProductById(id: number): Product {
        return this.products[id];
    }

    createProduct(product: Product) {
        this.products = [...this.products, product];
    }
}
