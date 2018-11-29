import MAPS, { MAPS_BY_NAME } from '../src/data/MAPS';
import PASSIVES from '../src/data/PASSIVES';
import TRIALS from '../src/data/TRIALS';
import PANTHEONS from '../src/data/PANTHEONS';
import BOSSES from '../src/data/BOSSES';

describe('Static data', () => {
  describe('Maps', () => {
    const mapsArr = MAPS;

    it('should have 158 maps in the atlas', () => {
      expect(mapsArr.filter(map => map.isOnAtlas)).toHaveLength(158);
    });

    it('should have 22 unique maps', () => {
      expect(mapsArr.filter(map => map.isUnique)).toHaveLength(22);
    });

    it('should have 9 maps with no tier', () => {
      expect(
        mapsArr.filter(map => map.tier === null || map.tier === 0)
      ).toHaveLength(9);
    });

    it('should have maps between lvl 68 and 84 (inclusive)', () => {
      expect(
        mapsArr.map(map => map.level).every(level => level >= 68 && level <= 84)
      ).toBe(true);
    });
  });

  describe('Passives', () => {
    const passivesArr = Object.values(PASSIVES);

    it('should give a total of 24 passive points', () => {
      expect(passivesArr.reduce((acc, cur) => acc + cur.points, 0)).toBe(24);
    });

    it('should have quest name and act number for each passive', () => {
      expect(
        passivesArr.every(
          passive =>
            typeof passive.quest === 'string' && typeof passive.act === 'number'
        )
      ).toBe(true);
    });
  });

  describe('Pantheons', () => {
    const pantheonsArr = Object.values(PANTHEONS);

    it('should have a valid boss for each pantheon', () => {
      const bosses = [];
      pantheonsArr.forEach(pantheon => {
        pantheon.upgrades.forEach(upgrade => bosses.push(upgrade.boss));
      });

      expect(bosses.every(bossId => BOSSES[bossId])).toBe(true);
    });
  });

  describe('Bosses', () => {
    const bossArr = Object.values(BOSSES);

    it('should have a valid map for each boss', () => {
      const maps = bossArr.map(boss => boss.map);

      maps.forEach(mapName => expect(MAPS_BY_NAME[mapName]).toBeTruthy());
    });
  });

  describe('Trials', () => {
    const trialsArr = Object.values(TRIALS);

    it('should have a zone and act property for each trial', () => {
      expect(
        trialsArr.every(
          trial => trial.hasOwnProperty('zone') && trial.hasOwnProperty('act')
        )
      ).toBe(true);
    });
  });
});
