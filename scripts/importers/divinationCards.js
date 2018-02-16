/**
 * This script does the following:
 * - Scrape divination card data from POE wiki
 * - For each card, find all maps in the dropAreas string that end with (War for the Atlas) (case insensitive)
 * - Output an object where keys are map names, and values are arrays of div cards.
 */

const importer = require('./wikiImporter');
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

console.log('Importing...');

const MAP_REGEX = /\[\[([^\]]+) \(war for the atlas\)\]\]/gi;
const FILE_NAME = path.resolve(
  __dirname,
  '..',
  '..',
  'src',
  'data',
  'MAP_DIVINATION_CARDS.js'
);

importer
  .getData({
    limit: 500,
    tables: 'items',
    fields: 'name,drop_areas_html=dropAreas',
    where: 'class="Divination Card"',
    group_by: 'items._pageName',
  })
  .then(findMapsInDivinationCardArray)
  .then(sortByMaps)
  .then(writeToDisc)
  .then(console.log)
  .catch(console.error);

/**
 * Replaces dropAreas in the div cards array with maps that drop them in the current version of the game
 */
function findMapsInDivinationCardArray(cards) {
  return cards.map(card => {
    const maps = [];
    let match;

    // eslint-disable-next-line no-cond-assign
    while ((match = MAP_REGEX.exec(card.title.dropAreas)) !== null) {
      maps.push(match[1]); // 1st capture group
    }

    return {
      name: card.title.name,
      maps,
    };
  });
}

/**
 * Takes an array of divination cards, and returns a hashmap of maps
 */
function sortByMaps(cards) {
  const output = {};

  cards.forEach(card => {
    card.maps.forEach(map => {
      if (!output[map]) {
        output[map] = [];
      }

      output[map].push(card.name);
    });
  });

  return output;
}

/**
 * Creates an es6 module file that default exports the data.
 */
function writeToDisc(data) {
  return new Promise(resolve => {
    prettier
      .resolveConfig(path.resolve(__dirname, '..', '..', '.prettierrc'))
      .then(opts => {
        const fileContents = prettier.format(
          `export default ${JSON.stringify(data, null, 2)}; \n`,
          opts
        );
        fs.writeFile(FILE_NAME, fileContents, () => {
          resolve(data);
        });
      });
  });
}
