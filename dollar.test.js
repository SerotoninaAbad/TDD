const Dollar = require("./dollar");
const Franc = require("./franc");

test("multiplication", () => {
  const five = new Dollar(5);
  expect(new Dollar(10)).toEqual(five.times(2));
  expect(new Dollar(15)).toEqual(five.times(3));
});

test("equality", () => {
  console.log(new Franc(5).constructor.name);
  expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
  expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
  expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
  expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
  expect(new Franc(5).equals(new Dollar(5))).toBeFalsy();
});

test("currency", () => {
  expect(new Dollar(1).currency()).toEqual("USD");
  expect(new Franc(1).currency()).toEqual("CHF");
});
