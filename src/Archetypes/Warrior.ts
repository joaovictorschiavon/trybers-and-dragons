import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType = 'stamina' as EnergyType;
  private static archetypeInstances = 0;
  public constructor(name: string) {
    super(name);
    Warrior.archetypeInstances += 1;
  }

  static createdArchetypeInstances():number {
    return this.archetypeInstances;
  }

  override get energyType():EnergyType {
    return this._energyType;
  }
}