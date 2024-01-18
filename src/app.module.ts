import { Module } from '@nestjs/common';
import { pdfUploaderModule } from './pdfUploader/pdfUploader.module';
import { ConfigModule } from '@nestjs/config';
import { MongoModule } from './mongo/mongo.module';

@Module({
  imports: [
    pdfUploaderModule,
    MongoModule,
    ConfigModule.forRoot({ isGlobal: true }), 
  ],
})

export class AppModule {}
