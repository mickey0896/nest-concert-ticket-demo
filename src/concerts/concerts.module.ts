import { Module } from '@nestjs/common';
import { ConcertsService } from './concerts.service';
import { ConcertsController } from './concerts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Concert } from './schemas/concerts.schemas';
import { ConcertSchema } from './schemas/concerts.schemas';
import { TicketModule } from 'src/ticket/ticket.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Concert.name,
        schema: ConcertSchema,
      },
    ]),

    TicketModule,
  ],
  controllers: [ConcertsController],
  providers: [ConcertsService],
})
export class ConcertsModule {}
