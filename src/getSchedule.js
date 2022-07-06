const data = require('../data/zoo_data');

const { species, hours } = data;
const fullSchedule = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};
const whichAnimal = species.map((item) => item.name);
const daysOfTheWeek = Object.keys(hours);

function getSchedule(scheduleTarget) {
  if (whichAnimal.includes(scheduleTarget)) {
    return species.find((item) => item.name === scheduleTarget).availability;
  }

  if (daysOfTheWeek.includes(scheduleTarget)) {
    const result = {};
    result[scheduleTarget] = fullSchedule[scheduleTarget];
    return result;
  }

  return fullSchedule;
}

console.log(getSchedule('Wednesday'));

module.exports = getSchedule;
