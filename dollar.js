const Money = require("./money");

class Dollar extends Money {
  constructor(amount) {
    super(amount, "USD");
  }
}

module.exports = Dollar;
