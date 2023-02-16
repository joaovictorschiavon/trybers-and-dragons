import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private name: string;
  constructor(name: string) {
    this.name = name;
    const dex = getRandomInt(1, 10);
    this._race = new Elf(name, dex);
    this._dexterity = this.race.dexterity;
    this._archetype = new Mage(name);
    this._maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archetype.energyType, 
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get energy(): Energy { return { ...this._energy }; }
  get dexterity(): number { return this._dexterity; }

  receiveDamage(attackPoints: number): number {
    const totalDamage = attackPoints - this.defense;
    if (totalDamage > 0) {
      this._lifePoints -= totalDamage;
    } else {
      this._lifePoints -= 1;
    }
    if (this.lifePoints < 1) {
      this._lifePoints = -1;
    }
    return this.lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    console.log(`Avada Kadavra ${enemy.lifePoints}, ${this.name}`);
  } 
}

export default Character;