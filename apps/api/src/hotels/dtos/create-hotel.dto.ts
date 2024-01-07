import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateHotelDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Min(0)
  @Min(5)
  stars: number;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  country: string;
}
