import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static raceInstance = 0;
  public constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.raceInstance += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.raceInstance;
  }
}