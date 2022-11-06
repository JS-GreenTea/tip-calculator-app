const tipRatio = document.querySelector(".tip-ratio");
const totalRatio = document.querySelector(".total-ratio");
const inputBill = document.querySelector(".bill");
const selectBtn = document.querySelectorAll("button");
const peopleNum = document.querySelector(".number");
let selectTip;

tipRatio.innerText = "$0.00";
totalRatio.innerText = "$0.00";

function clickedBtn(event) {
  selectTip = event.target.innerText;
  selectTip = parseInt(selectTip) / 100;
}

for (let i = 0; i < selectBtn.length; i++) {
  selectBtn[i].addEventListener("click", (e) => clickedBtn(e));
}

function showResult() {
  tipCalc = (Number(inputBill.value) * selectTip) / peopleNum.value;
  totalCalc = Number(inputBill.value) / peopleNum.value + tipCalc;
  tipRatio.innerText = `$${tipCalc.toFixed(2)}`;
  totalRatio.innerText = `$${totalCalc.toFixed(2)}`;
}

peopleNum.addEventListener("keyup", showResult);
