import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConcertDocument = Concert & Document;

@Schema({ timestamps: true })
export class Concert {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  totalTickets!: number;
}

export const ConcertSchema = SchemaFactory.createForClass(Concert);
