import { Injectable } from '@nestjs/common';
import { Ticket } from './schemas/ticket.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';



@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket.name) private ticketModal :Model<Ticket>){}
  async generateTickets(concertId: string, total: number) {
    const tickets: Ticket[] = [];
    for (let index = 0; index <= total; index++) {
      tickets.push({
        concertId,
        seatNo: `A${index}`,
        isBooked: false,
      });
    }
    return this.ticketModal.insertMany(tickets)
  }
}
