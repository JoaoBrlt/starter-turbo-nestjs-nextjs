import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateHotelDto } from "../dtos/create-hotel.dto";
import { UpdateHotelDto } from "../dtos/update-hotel.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Hotel } from "../entities/hotel.entity";
import { Repository } from "typeorm";

@Injectable()
export class HotelsService {
  constructor(
    @InjectRepository(Hotel)
    private hotelsRepository: Repository<Hotel>,
  ) {}

  async create(createHotelDto: CreateHotelDto): Promise<Hotel> {
    const exists = await this.hotelsRepository.exists({
      where: { name: createHotelDto.name },
    });
    if (exists) {
      throw new ConflictException("A hotel already exists with this name.");
    }
    const hotel = this.hotelsRepository.create(createHotelDto);
    return this.hotelsRepository.save(hotel);
  }

  findAll(): Promise<Hotel[]> {
    return this.hotelsRepository.find();
  }

  async find(id: number): Promise<Hotel> {
    const hotel = await this.hotelsRepository.findOneBy({ id });
    if (!hotel) {
      throw new NotFoundException("The hotel was not found.");
    }
    return hotel;
  }

  async update(id: number, updateHotelDto: UpdateHotelDto): Promise<Hotel> {
    let hotel = await this.hotelsRepository.findOneBy({ id });
    if (!hotel) {
      throw new NotFoundException("The hotel was not found.");
    }
    hotel = Object.assign(hotel, updateHotelDto);
    return this.hotelsRepository.save(hotel);
  }

  async delete(id: number): Promise<void> {
    const hotel = await this.hotelsRepository.findOneBy({ id });
    if (!hotel) {
      throw new NotFoundException("The hotel was not found.");
    }
    await this.hotelsRepository.delete(id);
  }
}
