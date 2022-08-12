import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { isEmpty } from 'rxjs';

@Injectable()
export class ProductsService {

    constructor(@InjectModel('Products') private readonly productModel: Model<Product>) { }

    async getAllProducts(): Promise<any> {
        const products = await this.productModel.find().exec();
        return products.map(product => ({
            id       :   product.id,
            name     :   product.name,
            price    :   product.price,
            quantity :   product.quantity,
            image    :   product.image
        }));
    }

    async getMaxId(): Promise<Number> {
        const maxId = await this.productModel.find().sort({id:-1}).limit(1).exec();
        // Pour créer un nouveau produit, puisque `id` n'est pas généré automatiquement, on recupère le plus grand `id`se trouvant dans la base de données et on l'incrémente de 1.
        if (maxId.length === 0) {
            return 1;
        } 
        return maxId[0].id;
    }

    async getProduct(id: Number): Promise<Product> {
        let product;
        try {
            product = await this.productModel.find({id: id}).exec();
        } catch (error) {   
            throw new NotFoundException('Could not found product');
        }
        if (!product) {
            throw new NotFoundException('Could not found product');
        }
        return product;
    }

    async createProduct(product: Product): Promise<Product> {
        let id = await this.getMaxId();
        id = id.valueOf() + 1;  
        // (maxId) ? (id = maxId.valueOf() + 1) : id = 1;
        const newProduct = new this.productModel({
            id       :   id,
            name     :   product.name,
            price    :   product.price,
            quantity :   product.quantity,
            image    :   product.image
        });
        const result = await newProduct.save();
        return result;
    }

    async updateProduct(id: Number, product: Product): Promise<Product> {
        const updatedProduct   =   await this.productModel.findOneAndUpdate({id: id}, product, { new : true});
        if (!updatedProduct)       throw new NotFoundException('Could not found product');
        return updatedProduct;
    }

    async deleteProduct(id: Number) {
        const result = await this.productModel.deleteOne({ id: id }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException('Could not found product');
        }
        return 'Product remove successfuly';
    }
}
