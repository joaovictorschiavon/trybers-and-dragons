import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  private static raceInstance = 0;
  public constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.raceInstance += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.raceInstance;
  }
}