const billInput = document.querySelector("#bill-input");
const tipAmountResult = document.querySelector("#tip-amount-result");
const totalResult = document.querySelector("#total-result");
let bill = 0;
const render = () => {
  console.log("bill:", bill);
};

const onChangeBill = (e) => {
  bill = e.target.value;
  render();
};

billInput.addEventListener("change", onChangeBill);
