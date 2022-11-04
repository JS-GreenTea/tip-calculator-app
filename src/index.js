const billInput = document.querySelector("#bill-input");
const tipAmountResult = document.querySelector("#tip-amount-result");
const totalResult = document.querySelector("#total-result");
const percentRadioBtns = document.querySelectorAll(".percent-radio-btn");
let bill = 0;
let people = 0;

const renderWarningStatus = () => {
  // some logic...
};

const isUnVaildInput = (target) => {
  return isNaN(target);
};

const render = () => {
  if (isUnVaildInput(bill)) {
    // handle bad input ...
    console.log("bad bill input!");
  }
  console.log("bill:", bill);
};

const onChangeBill = (e) => {
  bill = e.target.value;
  render();
};

const onChangePeople = (e) => {
  people = e.target.value;
  render();
};

billInput.addEventListener("change", onChangeBill);
