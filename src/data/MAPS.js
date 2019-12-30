import keyBy from 'lodash/keyBy';

// For this app, we need to keep a unique id for each map, which will be defined as the combination of name-tier-level
const raw = require('./json/MAPS-3.9.json');
const ACTIVE_VERSION = raw.version;
const MAPS = raw.list.map(map => ({
  ...map,
  id: getId(map),
}));

const MAPS_BY_NAME = keyBy(MAPS, 'name');
const TIER_RANGES = {
  WHITE: {
    rgb: '#CECFD1',
  },
  YELLOW: {
    rgb: '#F0C44C',
  },
  RED: {
    rgb: '#E92015',
  },
};
const TIER_COLORS = {
  '1': TIER_RANGES.WHITE,
  '2': TIER_RANGES.WHITE,
  '3': TIER_RANGES.WHITE,
  '4': TIER_RANGES.WHITE,
  '5': TIER_RANGES.WHITE,
  '6': TIER_RANGES.YELLOW,
  '7': TIER_RANGES.YELLOW,
  '8': TIER_RANGES.YELLOW,
  '9': TIER_RANGES.YELLOW,
  '10': TIER_RANGES.YELLOW,
  '11': TIER_RANGES.RED,
  '12': TIER_RANGES.RED,
  '13': TIER_RANGES.RED,
  '14': TIER_RANGES.RED,
  '15': TIER_RANGES.RED,
  '16': TIER_RANGES.RED,
};

function getId(map) {
  return map.name;
}

export { TIER_RANGES, TIER_COLORS, MAPS_BY_NAME, ACTIVE_VERSION };

export default MAPS;
