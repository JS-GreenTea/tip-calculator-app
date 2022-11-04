const billInput = document.querySelector("#bill-input");
const peopleInput = document.querySelector("#people-input");
const tipAmountResult = document.querySelector("#tip-amount-result");
const totalResult = document.querySelector("#total-result");
const percentRadioBtns = document.querySelectorAll(".percent-radio-btn");
let bill = 0;
let people = 0;

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
  console.log("bill:", bill);
  console.log("people:", people);
};

const onChangeBill = (e) => {
  bill = +e.target.value;
  render();
};

const onChangePeople = (e) => {
  people = +e.target.value;
  render();
};

billInput.addEventListener("change", onChangeBill);
peopleInput.addEventListener("change", onChangePeople);
