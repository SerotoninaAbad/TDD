const Money = require("./money");

class Dollar extends Money {
  constructor(amount) {
    super(amount, "USD");
  }
  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }
}

module.exports = Dollar;
