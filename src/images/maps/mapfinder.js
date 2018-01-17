const fs = require('fs');

const fileNamify = name =>
  name
    .toLowerCase()
    .replace(/\smap/g, '')
    .trim()
    .replace(/ /g, '_')
    .replace(/[^a-zA-Z_]/g, '')
    .concat('.jpg');

const maps = require('../../data/MAPS');

const images = fs.readdirSync(__dirname);
const picturedMaps = images.reduce((acc, cur) => {
  acc[cur] = true;
  return acc;
}, {});

Object.values(maps)
  .sort((a, b) => a.tier - b.tier)
  .forEach(map => {
    if (!picturedMaps[fileNamify(map.name)]) {
      console.log('Todo:', `(${map.tier}) ${map.name}`);
    }
  });
