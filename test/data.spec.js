import MAPS from '../src/data/MAPS';
import PASSIVES from '../src/data/PASSIVES';
import TRIALS from '../src/data/TRIALS';
import PANTHEONS from '../src/data/PANTHEONS';
import BOSSES from '../src/data/BOSSES';

describe('Static data', () => {
  describe('Maps', () => {
    const mapsArr = Object.values(MAPS);

    it('should have 126 maps in the atlas', () => {
      expect(mapsArr.filter(map => map.isOnAtlas)).toHaveLength(126);
    });

    it('should have 20 unique maps', () => {
      expect(mapsArr.filter(map => map.isUnique)).toHaveLength(20);
    });

    it("should have 15 maps that give shaper's orb", () => {
      expect(
        mapsArr.filter(map => typeof map.givesShaperOrb === 'number')
      ).toHaveLength(15);
    });

    it('should have 10 maps with no tier', () => {
      expect(mapsArr.filter(map => map.tier === null)).toHaveLength(10);
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

      expect(maps.every(mapId => MAPS[mapId])).toBe(true);
    });
  });

  describe('Trials', () => {
    const trialsArr = Object.values(TRIALS);

    it('should have a map and act for each trial', () => {
      expect(
        trialsArr.every(
          trial =>
            typeof trial.map === 'string' && typeof trial.act === 'number'
        )
      ).toBe(true);
    });
  });
});
