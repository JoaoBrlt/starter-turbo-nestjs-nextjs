import { CreateHotelDto } from "./create-hotel.dto";
import { PartialType } from "@nestjs/swagger";

export class UpdateHotelDto extends PartialType(CreateHotelDto) {}
