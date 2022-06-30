const data = require('../data/zoo_data');

const { employees } = data;

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function isManager(id) {
  if (employees.find(() => id === stephanieId || id === olaId || id === burlId)) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const managerName = [];
  employees.forEach((person) => {
    if (person.managers.includes(managerId)) {
      managerName.push(`${person.firstName} ${person.lastName}`);
    }
  });

  return managerName;
}

module.exports = { isManager, getRelatedEmployees };
