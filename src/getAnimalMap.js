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

const includeNamesTrue = () => {
  const animals = species.map((animal) => {
    const obj = {
      [animal.name]: animal.residents.map((one) => one.name),
    };
    return obj;
  });
  const result = { NE: [], NW: [], SE: [], SW: [] };
  result.NE.push(animals[0]); result.NE.push(animals[8]);
  result.NW.push(animals[1]); result.NW.push(animals[2]); result.NW.push(animals[7]);
  result.SE.push(animals[3]); result.SE.push(animals[4]);
  result.SW.push(animals[5]); result.SW.push(animals[6]);
  return result;
};

const sortedTrue = () => {
  const obj = includeNamesTrue();
  obj.NE[0].lions.sort(); obj.NE[1].giraffes.sort();
  obj.NW[0].tigers.sort(); obj.NW[1].bears.sort(); obj.NW[2].elephants.sort();
  obj.SE[0].penguins.sort(); obj.SE[1].otters.sort();
  obj.SW[0].frogs.sort(); obj.SW[1].snakes.sort();
  return obj;
};

function getAnimalMap(options = {}) {
  const { includeNames, sorted } = options;
  if (!options || !includeNames) return locationsOrdened();
  if (includeNames) return includeNamesTrue();
  if (sorted) return sortedTrue();
}

module.exports = getAnimalMap;
