import { Module } from '@nestjs/common';
import { MongoService } from './mongo.service';
import { MongoController } from './mongo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongo, MongoSchema } from './mongo.schema';

@Module({
  imports: [
    //* Use your preferred connection string
    MongooseModule.forRoot('mongodb://localhost:27017/nestChallenge'),
    MongooseModule.forFeature([
      {
        name: Mongo.name,
        schema: MongoSchema,
      }
    ])

    // TODO: Fix ThrottlerModule useFactory error to implement ttl and limit
    /* ThrottlerModule.forRootAsync({ useFactory: (configService: ConfigService) => ({
        ttl: configService.getOrThrow('UPLOAD_RATE_TTL'),
        limit: configService.getOrThrow('UPLOAD_RATE_LIMIT'),
      }), inject: [ConfigService],
    })*/
  ], 

  providers: [MongoService],

  controllers: [MongoController],
})

export class MongoModule {}
