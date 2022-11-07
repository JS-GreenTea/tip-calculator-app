const billInput = document.querySelector("#bill-input");
const peopleInput = document.querySelector("#people-input");
const tipAmountResult = document.querySelector("#tip-amount-result");
const totalResult = document.querySelector("#total-result");
const percentRadioBtns = document.querySelectorAll(".percent-radio-btn");
let bill = 0;
let people = 0;
let tipPercent = 0;
let tipPerPeople = 0;
let total = 0;

const renderWarningStatus = () => {
  // some logic...
};

const isVaildInput = (target) => {
  return !isNaN(target);
};

const render = () => {
  const vaildCheckList = [bill, people];
  if (!vaildCheckList.every((element) => isVaildInput(element))) {
    // handle bad input ...
    console.log("bad bill input!");
  }
  calcResult();
  renderTipPerPeople();
  renderTotal();
};

const printState = () => {
  console.log("bill:", bill);
  console.log("people:", people);
  console.log("tip:", tipPercent);
};

const onChangeBill = (e) => {
  bill = +e.target.value;
  render();
};

const onChangePeople = (e) => {
  people = +e.target.value;
  render();
};

const onChangePercentRadio = (e) => {
  tipPercent = +e.target.value;
  render();
};

const calcResult = () => {
  calcTipPerPeople();
  calcTotal();
};

const calcTipPerPeople = () => {
  tipPerPeople = (bill * tipPercent) / people;
};

const renderTipPerPeople = () => {
  tipAmountResult.innerText = tipPerPeople;
};

const calcTotal = () => {
  total = bill / people;
};

const renderTotal = () => {
  totalResult.innerText = total;
};

billInput.addEventListener("change", onChangeBill);
peopleInput.addEventListener("change", onChangePeople);
for (const percentRadioBtn of percentRadioBtns) {
  percentRadioBtn.addEventListener("change", onChangePercentRadio);
}
