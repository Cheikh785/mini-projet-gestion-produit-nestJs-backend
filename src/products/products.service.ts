import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
    products: Product[] = [
        {
            _id: '1',
            name: 'Chaise',
            price: 15000,
            quantity: 2,
            image: ''
        },
        {
            _id: '2',
            name: 'Sac à main',
            price: 25000,
            quantity: 1,
            image: ''
        },
        {
            _id: '3',
            name: 'Fenêtre',
            price: 35000,
            quantity: 3,
            image: ''
        }
    ]

    getAllProducts(): Product[] {
        return this.products;
    }

    createProduct(product: Product) {
        this.products = [...this.products, product];
    }
}
