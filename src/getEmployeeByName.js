const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  return employees.find((item) => item.firstName === employeeName
  || item.lastName === employeeName) || {};
}

console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;
