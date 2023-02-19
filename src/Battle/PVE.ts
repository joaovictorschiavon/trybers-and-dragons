import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(char1: Fighter, private enemyArr: SimpleFighter[]) {
    super(char1);
  }

  attackRound(): number {
    let enemyFlag = 0;
    this.player.attack(this.enemyArr[enemyFlag]);
    for (let i = 0; i < this.enemyArr.length; i += 1) { 
      this.enemyArr[i].attack(this.player);
    }
    if (this.enemyArr[enemyFlag].lifePoints < 1) {
      enemyFlag += 1;
    }
    return enemyFlag;
  }

  fight(): number {
    const flag = true;
    while (flag) {
      const enemyFlag = this.attackRound();
      if (this.player.lifePoints < 1) break;
      if (enemyFlag === this.enemyArr.length) break;
    }
    return super.fight();
  }
}