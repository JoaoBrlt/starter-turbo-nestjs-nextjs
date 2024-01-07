import { Test, TestingModule } from "@nestjs/testing";
import { HotelsService } from "./hotels.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Hotel } from "../entities/hotel.entity";
import { createMock, DeepMocked } from "@golevelup/ts-jest";
import { Repository } from "typeorm";

describe("HotelsService", () => {
  let repository: DeepMocked<Repository<Hotel>>;
  let service: HotelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HotelsService,
        {
          provide: getRepositoryToken(Hotel),
          useValue: createMock<Repository<Hotel>>(),
        },
      ],
    }).compile();

    repository = module.get(getRepositoryToken(Hotel));
    service = module.get<HotelsService>(HotelsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("findAll", () => {
    it("should return all the hotels", async () => {
      // Given
      const hotels = [
        {
          id: 1,
          name: "Negresco",
          stars: 5,
          address: "Promenade des Anglais",
          city: "Nice",
          country: "France",
        },
      ];
      repository.find.mockResolvedValueOnce(hotels);

      // When
      const result = await service.findAll();

      // Then
      expect(result).toEqual(hotels);
    });
  });
});
