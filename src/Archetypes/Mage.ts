import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType = 'mana' as EnergyType;
  private static archetypeInstances = 0;
  public constructor(name: string) {
    super(name);
    Mage.archetypeInstances += 1;
  }

  static createdArchetypeInstances():number {
    return this.archetypeInstances;
  }

  override get energyType():EnergyType {
    return this._energyType;
  }
}