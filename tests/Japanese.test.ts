import { OdaNobunaga, TokugawaIeyasu } from '../Leaders';
import Japanese from '../Japanese';
import Leader from '@civ-clone/core-civilization/Leader';
import { expect } from 'chai';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';
import '../index';

describe('Japanese', (): void => {
  it('has a people, a nation and two colours', (): void => {
    const attributes = Object.fromEntries(
      attributeRegistryInstance
        .getByCivilization(Japanese)
        .map((attribute) => [attribute.name(), attribute.value()])
    );

    expect(attributes.people).to.equal('Japanese');
    expect(attributes.nation).to.equal('Japan');
    expect(attributes.colors).to.have.lengthOf(2);
    attributes.colors.forEach((color: string) =>
      expect(color).to.match(/^#([0-9A-F]{3}|[0-9A-F]{6})$/i)
    );
  });

  it('has city names, all different, with its capital first', (): void => {
    const cityNames = cityNameRegistryInstance
      .entries()
      .filter((cityName) => cityName.civilization() === Japanese);

    expect(cityNames.length).to.be.at.least(30);
    expect(new Set(cityNames.map((cityName) => cityName.name())).size).to.equal(
      cityNames.length
    );
    expect(
      cityNames
        .filter((cityName) => cityName.capital())
        .map((cityName) => cityName.name())
    ).to.eql(['Kyoto']);
  });

  it('has leaders of the Japanese', (): void => {
    (
      [
        [OdaNobunaga, 'Oda Nobunaga'],
        [TokugawaIeyasu, 'Tokugawa Ieyasu'],
      ] as [typeof Leader, string][]
    ).forEach(([LeaderType, name]) => {
      expect(LeaderType.civilization()).to.equal(Japanese);
      expect(new LeaderType().name()).to.equal(name);
    });
  });
});
