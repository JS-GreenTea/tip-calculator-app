const billInput = document.querySelector(".bill-input");
const tipRatioInputs = document.querySelectorAll(".select-tip-button");
const customTipRatioInput = document.querySelector(".custom-tip-input");
const peopleInput = document.querySelector(".people-input");
const tipPerPersonOutput = document.querySelector(".tip-per-person");
const totalPerPersonOutput = document.querySelector(".total-per-person");
const resetButton = document.querySelector(".reset-button");

let bill = 0;
let tipRatio = 0;
let people = 0;
let tipPerPerson = 0;
let totalPerPerson = 0;

const calculate = () => {
  if (bill === 0 || tipRatio === 0 || people === 0) {
    return;
  }

  tipPerPerson = (bill * tipRatio) / people;
  totalPerPerson = bill / people + tipPerPerson;

  tipPerPersonOutput.innerHTML = `$ ${tipPerPerson.toFixed(2)}`;
  totalPerPersonOutput.innerHTML = `$ ${totalPerPerson.toFixed(2)}`;

  console.log(bill, tipRatio, people, tipPerPerson, totalPerPerson);
};

const onBillChange = (e) => {
  bill = e.target.value;

  calculate();
};

const onTipRatioChange = (e) => {
  tipRatioInputs.forEach((tipRatioInput) => {
    tipRatioInput.classList.remove("selected");
  });

  customTipRatioInput.value = null;

  e.target.classList.add("selected");
  tipRatio = e.target.value;

  calculate();
};

const onCustomTipRatioChange = (e) => {
  tipRatioInputs.forEach((tipRatioInput) => {
    tipRatioInput.classList.remove("selected");
  });

  tipRatio = e.target.value;

  calculate();
};

const onPeopleChange = (e) => {
  people = e.target.value;

  calculate();
};

const onResetButtonClick = (e) => {
  bill = 0;
  tipRatio = 0;
  people = 0;
  tipPerPerson = 0;
  totalPerPerson = 0;

  billInput.value = null;
  tipRatioInputs.forEach((tipRatioInput) => {
    tipRatioInput.classList.remove("selected");
  });
  customTipRatioInput.value = null;
  peopleInput.value = null;
  tipPerPersonOutput.innerHTML = "$ 0.00";
  totalPerPersonOutput.innerHTML = "$ 0.00";
};

billInput.addEventListener("change", onBillChange);
tipRatioInputs.forEach((tipRatioInput) => {
  tipRatioInput.addEventListener("click", onTipRatioChange);
});
customTipRatioInput.addEventListener("change", onCustomTipRatioChange);
peopleInput.addEventListener("change", onPeopleChange);
resetButton.addEventListener("click", onResetButtonClick);
