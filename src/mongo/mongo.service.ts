import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mongo, MongoDocument } from './mongo.schema';
import { Model } from 'mongoose';

@Injectable()
export class MongoService {
    constructor(@InjectModel(Mongo.name) private mongoModel: Model<MongoDocument>){}

    async getAll(){
        return await this.mongoModel.find();
    }

    // TODO: Post service
    /* async insertData(body: any){} */
}
