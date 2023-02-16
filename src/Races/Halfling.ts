import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  private static raceInstance = 0;
  public constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.raceInstance += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.raceInstance;
  }
}