import { Injectable } from '@nestjs/common';
import { CreateConcertDto } from './dto/create-concert.dto';
import { Concert } from './schemas/concerts.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TicketService } from 'src/ticket/ticket.service';

@Injectable()
export class ConcertsService {
  constructor(
    @InjectModel(Concert.name)
    private concertModule: Model<Concert>,
    private ticketService: TicketService,
  ) {}

  async create(dto: CreateConcertDto) {
    const concert = await this.concertModule.create(dto);

    await this.ticketService.generateTickets(
      concert._id.toString(),
      dto.totalTickets,
    );

    return concert
  }
  findAll() {
    return this.concertModule.find();
  }
}
