import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  private static raceInstance = 0;
  public constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.raceInstance += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.raceInstance;
  }
}