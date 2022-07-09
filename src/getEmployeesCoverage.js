/* eslint-disable max-lines-per-function */
const data = require('../data/zoo_data');

const { employees, species } = data;

const getSpeciesNames = (item) => {
  const speciesNames = [];
  species.forEach((one) => {
    if ((item.responsibleFor).includes(one.id)) {
      speciesNames.push(one.name);
    }
  });
  return speciesNames;
};

const getSpeciesLocations = (item) => {
  const speciesLocations = [];
  species.forEach((one) => {
    if ((item.responsibleFor).includes(one.id)) {
      speciesLocations.push(one.location);
    }
  });
  return speciesLocations;
};

const getResult = () => {
  const result = [];
  employees.forEach((item) => {
    const object = {
      id: item.id,
      fullName: `${item.firstName} ${item.lastName}`,
      species: getSpeciesNames(item),
      locations: getSpeciesLocations(item),
    };
    result.push(object);
  });
  return result;
};

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
    return getResult();
  }

  if (employees.find((item) => item.firstName === arg.name
    || item.lastName === arg.name
    || item.id === arg.id)) {
    return verifyEmployee(arg);
  }

  throw new Error('Informações inválidas');
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
