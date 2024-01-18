import { Controller, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { pdfUploaderService } from './pdfUploader.service';

@Controller('upload')
export class pdfUploaderController {
    constructor(private readonly pdfUploaderService: pdfUploaderService) {}

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile(
        new ParseFilePipe({
            validators: [
                //* Uploaded files must be 1MB max size and PDF format, change as needed
                new MaxFileSizeValidator({ maxSize: 1000000 }),
                new FileTypeValidator({ fileType: 'pdf' }),
            ]
        })
    ) file: Express.Multer.File) {
        await this.pdfUploaderService.upload(
            file.originalname, 
            file.buffer,
        );
        console.log(file); //? Extract the metadata from the log?
    };
}
