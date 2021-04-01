import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list a available cars.", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Carro bonito",
      daily_rate: 168.0,
      license_plate: "DEV-1234",
      fine_amount: 180,
      brand: "Car_brand",
      category_id: "1b3b6945-e53a-478d-ab0d-385e84a3ed99",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list a available cars by brand.", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Carro bonito",
      daily_rate: 168.0,
      license_plate: "DEV-1234",
      fine_amount: 180,
      brand: "Car_brand",
      category_id: "1b3b6945-e53a-478d-ab0d-385e84a3ed99",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list a available cars by name.", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Carro bonito",
      daily_rate: 168.0,
      license_plate: "DEV-1234",
      fine_amount: 180,
      brand: "Car_brand",
      category_id: "1b3b6945-e53a-478d-ab0d-385e84a3ed99",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car3",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list a available cars by category.", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car4",
      description: "Carro bonito",
      daily_rate: 168.0,
      license_plate: "DEV-1234",
      fine_amount: 180,
      brand: "Car_brand",
      category_id: "12345",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "123456",
    });

    expect(cars).toEqual([car]);
  });
});
