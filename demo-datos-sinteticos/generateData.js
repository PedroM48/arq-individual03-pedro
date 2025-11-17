const { faker } = require("@faker-js/faker");

function generateUser() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    age: faker.number.int({ min: 18, max: 80 }),
    createdAt: faker.date.past()
  };
}

module.exports = { generateUser };
