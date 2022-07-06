const data = require('../data/zoo_data');

const { employees, species } = data;
const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
// const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
// const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function getOldestFromFirstSpecies(id) {
  const whichEmployee = employees.find((item) => item.id === id);
  const firstAnimal = whichEmployee.responsibleFor[0];
  const whichSpecie = species.find((item) => item.id === firstAnimal);
  const ordenedAges = whichSpecie.residents.map((item) => item.age).sort((a, b) => b - a);
  return Object.values(whichSpecie.residents.find((item) => item.age === ordenedAges[0]));
}

console.log(getOldestFromFirstSpecies(stephanieId));

module.exports = getOldestFromFirstSpecies;
