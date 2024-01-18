import { Body, Controller, Get, Post } from '@nestjs/common';
import { MongoService } from './mongo.service';

@Controller('mongo')
export class MongoController {
    constructor(private readonly mongoService: MongoService){}
    
    @Get('read-all')
    getAll(): any {
        return this.mongoService.getAll();
    }

    // TODO: Post endpoint
    /* @Post('insert')
    insert(@Body() body: any): any {
        return this.mongoService.insertData(body);
    } */
}
