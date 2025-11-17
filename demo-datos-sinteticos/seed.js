const { generateUser } = require("./generateData");

function seed(number = 10) {
  const users = [];
  for (let i = 0; i < number; i++) {
    users.push(generateUser());
  }
  return users;
}

module.exports = { seed };
