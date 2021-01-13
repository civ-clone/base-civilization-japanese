import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Japanese from '../Japanese';

export class TokugawaIeyasu extends Leader {
  static civilization(): typeof Civilization {
    return Japanese;
  }

  name(): string {
    return 'Tokugawa Ieyasu';
  }
}

export default TokugawaIeyasu;
