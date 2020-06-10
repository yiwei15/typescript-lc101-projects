import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";

export class Rocket {
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];

  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

  sumMass(items: Payload[]): number {
    let sumMass = 0;
    for (let i = 0; i < items.length; i++) {
      sumMass += items[i].massKg;
    }
    return sumMass;
  }

  currentMassKg(): number {
    let massOfAstronuats: number = this.sumMass(this.astronauts);
    let massOfCargoItems: number = this.sumMass(this.cargoItems);
    
    return massOfAstronuats + massOfCargoItems;
  }

  canAdd(item: Payload): boolean {
    if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
      return true;
    } else {
      return false;
    }
  }

  addCargo(cargo: Cargo): boolean {
    if (this.canAdd(cargo)) {
      this.cargoItems.push(cargo);
      return true;
    } else {
      return false;
    }
  }

  addAstronaut(astronaut: Astronaut): boolean {
    if (this.canAdd(astronaut)) {
      this.astronauts.push(astronaut);
      return true;
    } else {
      return false;
    }
  }
}
