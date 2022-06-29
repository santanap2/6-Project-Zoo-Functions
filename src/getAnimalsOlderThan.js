const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  return species.find((eachAnimal) => eachAnimal.name === animal).residents
    .every((individual) => individual.age >= age);
}

console.log(getAnimalsOlderThan('lions', 7));

module.exports = getAnimalsOlderThan;
