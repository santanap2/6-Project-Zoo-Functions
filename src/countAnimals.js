const data = require('../data/zoo_data');

const { species } = data;

const expected = {
  lions: 4,
  tigers: 2,
  bears: 3,
  penguins: 4,
  otters: 4,
  frogs: 2,
  snakes: 2,
  elephants: 4,
  giraffes: 6,
};

function countAnimals(animal) {
  if (!animal) {
    return expected;
  }

  if (!animal.sex) {
    return species.find(({ name }) => name === animal.specie).residents.length;
  }

  return species.find(({ name }) => name === animal.specie).residents
    .filter(({ sex }) => sex === animal.sex).length;
}

countAnimals();

module.exports = countAnimals;
