import { Module } from '@nestjs/common';
import { pdfUploaderController } from './pdfUploader.controller';
import { pdfUploaderService } from './pdfUploader.service';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // TODO: Fix ThrottlerModule useFactory error to implement ttl and limit
    /* ThrottlerModule.forRootAsync({ useFactory: (configService: ConfigService) => ({
        ttl: configService.getOrThrow('UPLOAD_RATE_TTL'),
        limit: configService.getOrThrow('UPLOAD_RATE_LIMIT'),
      }), inject: [ConfigService],
    })*/
  ], 

  controllers: [pdfUploaderController],

  providers: [
    pdfUploaderService, 
    // TODO: Same ThrottlerModule useFactory error
    /* {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    } */
  ]
})

export class pdfUploaderModule {}
