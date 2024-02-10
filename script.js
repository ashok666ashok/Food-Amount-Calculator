//first we need to access all div by calling id
const foodAmount = document.getElementById("foodAmountInput");
const tipAmount = document.getElementById("tipAmountInput");

const personDiv = document.getElementById("perPersonDiv");
const perPerson = document.getElementById("totalDiv");
let numberofPerson = Number(personDiv.innerText);

/**
 * The above function calculates the total amount per person including tip based on the food amount,
 * tip percentage, and number of people.
 */
const calculate = () => {
  const food = Number(foodAmount.value);
  const tip = Number(tipAmount.value) / 100;
  const tipTotal = food * tip;
  const total = (food + tipTotal) / numberofPerson;
  perPerson.innerText = `$${total.toFixed(2)}`;
};
/**
 * The above function increments the value of "numberofPerson" by 1 and updates the text content of
 * "personDiv" with the new value.
 */
const incriment = () => {
  numberofPerson += 1;
  personDiv.innerText = numberofPerson;
  calculate();
};
/**
 * The function decrements the value of the variable "numberofPerson" by 1 and updates the
 * corresponding HTML element.
 * returns nothing (undefined) if the condition `numberofPerson==1` is true.
 */
const decriment = () => {
  if (numberofPerson == 1) {
    return;
  } else {
    numberofPerson -= 1;
    personDiv.innerText = numberofPerson;
    calculate();
  }
};
