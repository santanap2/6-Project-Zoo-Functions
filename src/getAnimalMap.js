const data = require('../data/zoo_data');

const { species } = data;

const locationsOrdened = () => {
  const ne = []; const nw = []; const se = []; const sw = [];
  species.filter((one) => one.location === 'NE').forEach((item) => ne.push(item.name));
  species.filter((one) => one.location === 'NW').forEach((item) => nw.push(item.name));
  species.filter((one) => one.location === 'SE').forEach((item) => se.push(item.name));
  species.filter((one) => one.location === 'SW').forEach((item) => sw.push(item.name));
  return { NE: ne, NW: nw, SE: se, SW: sw };
};

const includeNamesTrue = (sort) => {
  const animals = species.map((animal) => {
    const obj = {
      [animal.name]: animal.residents.map((one) => one.name),
    };
    const objSorted = {
      [animal.name]: animal.residents.map((one) => one.name).sort(),
    };
    if (sort) return objSorted;
    return obj;
  });
  const result = { NE: [], NW: [], SE: [], SW: [] };
  result.NE.push(animals[0]); result.NE.push(animals[8]);
  result.NW.push(animals[1]); result.NW.push(animals[2]); result.NW.push(animals[7]);
  result.SE.push(animals[3]); result.SE.push(animals[4]);
  result.SW.push(animals[5]); result.SW.push(animals[6]);
  return result;
};

function getAnimalMap(options = {}) {
  const { includeNames, sorted } = options;
  if (!options || !includeNames) return locationsOrdened();
  if (sorted) return includeNamesTrue(sorted);
  return includeNamesTrue();
}

module.exports = getAnimalMap;
