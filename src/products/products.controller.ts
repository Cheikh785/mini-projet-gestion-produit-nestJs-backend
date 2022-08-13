import { Body, Controller, Delete, Get, Param, Patch, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
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

    @Post('upload-image')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './upload'
            // filename: (req, file, cb) => {
            //     const name = file.originalname.split('.')[0];
            //     const fileExtension = file.originalname.split('.')[1];
            //     const newFileName = name.split(' ').join('_') + '.' + fileExtension;
            //     console.log(newFileName);
            // }
        })
        // fileFilter: (req, file, cb) => {
        //     if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        //         return cb(Error('Format of file not supported'), false);
        //     }
        //     return cb(null, true);
        // }
    }))
    public uploadImage(@UploadedFile() file: Express.Multer.File) {
        console.log(file.originalname);
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {dest: '/tmp/files', }))
    upload(@UploadedFile() file: {path: string}) {
        // res.ok(file.path);
        return {path: file.path};
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

