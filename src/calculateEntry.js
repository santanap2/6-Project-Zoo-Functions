const data = require('../data/zoo_data');

const entrantss = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  let childCount = 0; let adultCount = 0; let seniorCount = 0;
  entrants.forEach((item) => {
    if (item.age < 18) {
      childCount += 1;
    }
    if (item.age >= 18 && item.age < 50) {
      adultCount += 1;
    }
    if (item.age >= 50) {
      seniorCount += 1;
    }
  });
  return {
    child: childCount,
    adult: adultCount,
    senior: seniorCount,
  };
}

console.log(countEntrants(entrantss));

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const peopleNumber = countEntrants(entrants);
  let sum = 0;
  sum += peopleNumber.child * 20.99;
  sum += peopleNumber.adult * 49.99;
  sum += peopleNumber.senior * 24.99;
  return sum;
}

console.log(calculateEntry(entrantss));

module.exports = { calculateEntry, countEntrants };
