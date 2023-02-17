import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(char1: Fighter, private char2: Fighter) {
    super(char1);
  }

  fight(): number {
    const flag = true;
    while (flag) {
      this.player.attack(this.char2);
      this.char2.attack(this.player);
      if (this.player.lifePoints < 1) break;
      if (this.char2.lifePoints < 1) break;
    }
    return super.fight();
  }
}