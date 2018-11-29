const defined = require('../config/define');

Object.entries(defined).forEach(([key, value]) => {
  global[key] = value;
});
