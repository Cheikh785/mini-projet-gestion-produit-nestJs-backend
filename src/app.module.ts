import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule, 
    ProductsModule, 
    MongooseModule.forRoot(
      'mongodb+srv://cheikh:passer@cluster0.asfbj2d.mongodb.net/mini-project-teamx-database?retryWrites=true&w=majority'
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
