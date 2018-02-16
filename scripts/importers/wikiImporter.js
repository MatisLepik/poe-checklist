const fetch = require('node-fetch');

const basePath = `https://pathofexile.gamepedia.com/api.php?`;
const defaultParams = {
  action: 'cargoquery',
  format: 'json',
  formatversion: 1,
};

module.exports.getEndpoint = params =>
  `${basePath}${Object.entries(Object.assign({}, defaultParams, params))
    .map(entry => entry.map(part => encodeURIComponent(part)).join('='))
    .join('&')}`;

module.exports.getData = params => {
  console.info(
    'Getting data from endpoint:',
    module.exports.getEndpoint(params)
  );

  return fetch(module.exports.getEndpoint(params))
    .then(res => res.json())
    .then(res => res.cargoquery);
};
