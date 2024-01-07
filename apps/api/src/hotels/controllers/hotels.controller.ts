import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { HotelsService } from "../services/hotels.service";
import { CreateHotelDto } from "../dtos/create-hotel.dto";
import { UpdateHotelDto } from "../dtos/update-hotel.dto";

@Controller("hotels")
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createHotelDto: CreateHotelDto) {
    return this.hotelsService.create(createHotelDto);
  }

  @Get()
  findAll() {
    return this.hotelsService.findAll();
  }

  @Get(":id")
  find(@Param("id") id: string) {
    return this.hotelsService.find(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateHotelDto: UpdateHotelDto) {
    return this.hotelsService.update(+id, updateHotelDto);
  }

  @Delete(":id")
  @HttpCode(204)
  delete(@Param("id") id: string) {
    return this.hotelsService.delete(+id);
  }
}
