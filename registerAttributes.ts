import Japanese from './Japanese';
import Attribute from '@civ-clone/core-civilization/Attribute';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';

Object.entries({
  people: 'Japanese',
  nation: 'Japan',
  colors: ['#FD5DFC', '#832317'],
}).forEach(([name, value]: [string, any]): void =>
  attributeRegistryInstance.register(new Attribute(Japanese, name, value))
);
