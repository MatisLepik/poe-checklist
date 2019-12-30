const getClientEnvironment = require('./env');
const fs = require('fs');
const path = require('path');
const paths = require('./paths');

function getMapList() {
  return fs
    .readdirSync(path.resolve(paths.appSrc, 'copy', 'maps'))
    .reduce((acc, cur) => {
      acc[cur] = true;
      return acc;
    }, {});
}

module.exports = publicUrl =>
  Object.assign({}, getClientEnvironment(publicUrl || '').stringified, {
    __MAP_PICTURES__: JSON.stringify(getMapList()),
  });
