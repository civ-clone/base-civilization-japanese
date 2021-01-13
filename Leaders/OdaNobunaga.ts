import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Japanese from '../Japanese';

export class OdaNobunaga extends Leader {
  static civilization(): typeof Civilization {
    return Japanese;
  }

  name(): string {
    return 'Oda Nobunaga';
  }
}

export default OdaNobunaga;
