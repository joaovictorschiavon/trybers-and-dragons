import Monster from './Monster';

export default class Dragon extends Monster {
  public constructor() {
    super();
    this._lifePoints = 999;
  }
}