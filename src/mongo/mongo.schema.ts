import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type MongoDocument = Mongo & Document;

@Schema()
export class Mongo {
    @Prop({require: true})
    name: string;

    @Prop()
    size: string;
};

export const MongoSchema = SchemaFactory.createForClass(Mongo);
