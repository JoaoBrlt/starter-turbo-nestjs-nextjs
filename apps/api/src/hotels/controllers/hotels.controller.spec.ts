import { Test, TestingModule } from "@nestjs/testing";
import { HotelsController } from "./hotels.controller";
import { HotelsService } from "../services/hotels.service";
import { createMock, DeepMocked } from "@golevelup/ts-jest";

describe("HotelsController", () => {
  let service: DeepMocked<HotelsService>;
  let controller: HotelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotelsController],
      providers: [
        {
          provide: HotelsService,
          useValue: createMock<HotelsService>(),
        },
      ],
    }).compile();

    service = module.get(HotelsService);
    controller = module.get<HotelsController>(HotelsController);
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
      service.findAll.mockResolvedValueOnce(hotels);

      // When
      const result = await controller.findAll();

      // Then
      expect(result).toEqual(hotels);
    });
  });
});
