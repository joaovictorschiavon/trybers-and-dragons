import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private energyType = 'mana' as EnergyType;
  private static archetypeInstances = 0;
  public constructor(name: string) {
    super(name);
    Necromancer.archetypeInstances += 1;
  }

  static createdArchetypeInstances():number {
    return this.archetypeInstances;
  }

  override get energType():EnergyType {
    return this.energyType;
  }
}