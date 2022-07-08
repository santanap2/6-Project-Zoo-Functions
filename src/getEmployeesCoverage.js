const data = require('../data/zoo_data');

const { employees, species } = data;
const result = [
  {
    id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    fullName: 'Nigel Nelson',
    species: ['lions', 'tigers'],
    locations: ['NE', 'NW'],
  },
  {
    id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
    fullName: 'Burl Bethea',
    species: ['lions', 'tigers', 'bears', 'penguins'],
    locations: ['NE', 'NW', 'NW', 'SE'],
  },
  {
    id: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    fullName: 'Ola Orloff',
    species: ['otters', 'frogs', 'snakes', 'elephants'],
    locations: ['SE', 'SW', 'SW', 'NW'],
  },
  {
    id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
    fullName: 'Wilburn Wishart',
    species: ['snakes', 'elephants'],
    locations: ['SW', 'NW'],
  },
  {
    id: '9e7d4524-363c-416a-8759-8aa7e50c0992',
    fullName: 'Stephanie Strauss',
    species: ['otters', 'giraffes'],
    locations: ['SE', 'NE'],
  },
  {
    id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
    fullName: 'Sharonda Spry',
    species: ['otters', 'frogs'],
    locations: ['SE', 'SW'],
  },
  {
    id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
    fullName: 'Ardith Azevado',
    species: ['tigers', 'bears'],
    locations: ['NW', 'NW'],
  },
  {
    id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
    fullName: 'Emery Elser',
    species: ['lions', 'bears', 'elephants'],
    locations: ['NE', 'NW', 'NW'],
  },
];
// const teste = { id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f' };

const getSpecies = (param) => {
  const { responsibleFor } = employees.find((one) => one.firstName === param.name
    || one.lastName === param.name
    || one.id === param.id);
  const speciesArray = [];
  species.forEach((item) => {
    if (responsibleFor.includes(item.id)) {
      speciesArray.push(item.name);
    }
  });
  return speciesArray;
};

const getLocations = (param) => {
  const { responsibleFor } = (employees.find((one) => one.lastName === param.name
    || one.firstName === param.name
    || one.id === param.id));
  const locationsArray = [];
  species.forEach((item) => {
    if (responsibleFor.includes(item.id)) {
      locationsArray.push(item.location);
    }
  });
  return locationsArray;
};

const verifyEmployee = (object) => {
  const returnedObject = {
    id: '',
    fullName: '',
    species: '',
    locations: '',
  };

  const isEmployee = employees.find((one) => one.firstName === object.name
    || one.lastName === object.name
    || one.id === object.id);

  if (isEmployee) {
    returnedObject.id = isEmployee.id;
    returnedObject.fullName = `${isEmployee.firstName} ${isEmployee.lastName}`;
    returnedObject.species = getSpecies(object);
    returnedObject.locations = getLocations(object);
    return returnedObject;
  }
};

function getEmployeesCoverage(arg) {
  if (!arg) {
    return result;
  }

  if (employees.find((item) => item.firstName === arg.name
    || item.lastName === arg.name
    || item.id === arg.id)) {
    return verifyEmployee(arg);
  }

  throw new Error('Informações inválidas');
}

// console.log(getEmployeesCoverage(teste));

module.exports = getEmployeesCoverage;
