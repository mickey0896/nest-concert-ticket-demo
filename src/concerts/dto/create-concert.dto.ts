import { IsNumber, IsString } from "class-validator";

export class CreateConcertDto {
    @IsString()
    name!:string

    @IsNumber()
    totalTickets!:number
}
