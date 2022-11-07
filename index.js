const billInput = document.querySelector(".bill-input");
const billAlert = document.querySelector(".bill-alert");

const tipRatioInputs = document.querySelectorAll(".select-tip-button");
const customTipRatioInput = document.querySelector(".custom-tip-input");

const peopleInput = document.querySelector(".people-input");
const peopleAlert = document.querySelector(".people-alert");

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
};

const onBillChange = (e) => {
  if (e.target.value === "0") {
    billAlert.style.visibility = "visible";
    e.target.style.border = "1px solid red";
  } else {
    billAlert.style.visibility = "hidden";
    e.target.style.border = "none";

    bill = Number(e.target.value);
    calculate();
  }
};

const onTipRatioChange = (e) => {
  tipRatioInputs.forEach((tipRatioInput) => {
    tipRatioInput.classList.remove("selected");
  });
  customTipRatioInput.value = null;

  e.target.classList.add("selected");
  tipRatio = Number(e.target.value);
  calculate();
};

const onCustomTipRatioChange = (e) => {
  tipRatioInputs.forEach((tipRatioInput) => {
    tipRatioInput.classList.remove("selected");
  });

  tipRatio = Number(e.target.value);
  calculate();
};

const onPeopleChange = (e) => {
  if (e.target.value === "0") {
    peopleAlert.style.visibility = "visible";
    e.target.style.border = "1px solid red";
  } else {
    peopleAlert.style.visibility = "hidden";
    e.target.style.border = "none";

    people = Number(e.target.value);
    calculate();
  }
};

const onResetButtonClick = (e) => {
  bill = 0;
  tipRatio = 0;
  people = 0;
  tipPerPerson = 0;
  totalPerPerson = 0;

  billInput.value = null;
  billInput.style.border = "none";
  billAlert.style.visibility = "hidden";

  tipRatioInputs.forEach((tipRatioInput) => {
    tipRatioInput.classList.remove("selected");
  });
  customTipRatioInput.value = null;

  peopleInput.value = null;
  peopleInput.style.border = "none";
  peopleAlert.style.visibility = "hidden";

  tipPerPersonOutput.innerHTML = "$ 0.00";
  totalPerPersonOutput.innerHTML = "$ 0.00";
};

billInput.addEventListener("keyup", onBillChange);
tipRatioInputs.forEach((tipRatioInput) => {
  tipRatioInput.addEventListener("click", onTipRatioChange);
});
customTipRatioInput.addEventListener("keyup", onCustomTipRatioChange);
peopleInput.addEventListener("keyup", onPeopleChange);
resetButton.addEventListener("click", onResetButtonClick);
