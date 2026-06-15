import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TicketDocument = Ticket & Document;

@Schema({ timestamps: true })
export class Ticket {
  @Prop({ required: true })
  concertId!: string;

  @Prop({ required: true })
  seatNo!: string;

  @Prop({ default: false })
  isBooked!: boolean;
}

export const TicketSchema =
  SchemaFactory.createForClass(Ticket);