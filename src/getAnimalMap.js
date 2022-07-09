const data = require('../data/zoo_data');

const { species } = data;

const locationOrdened = () => {
  const ne = [];
  species.filter((one) => one.location === 'NE').forEach((item) => {
    ne.push(item.name);
  });
  const nw = [];
  species.filter((one) => one.location === 'NW').forEach((item) => {
    nw.push(item.name);
  });
  const se = [];
  species.filter((one) => one.location === 'SE').forEach((item) => {
    se.push(item.name);
  });
  const sw = [];
  species.filter((one) => one.location === 'SW').forEach((item) => {
    sw.push(item.name);
  });
  const result = { NE: ne, NW: nw, SE: se, SW: sw };
  return result;
};

function getAnimalMap(options) {
  if (!options) return locationOrdened();
}
console.log(getAnimalMap());

module.exports = getAnimalMap;
