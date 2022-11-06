const tipRatio = document.querySelector(".tip-ratio");
const totalRatio = document.querySelector(".total-ratio");
const inputBill = document.querySelector(".bill");
const selectBtn = document.querySelectorAll("button");
const peopleNum = document.querySelector(".number");
const resetBtn = document.querySelector(".reset");
let selectTip;

function clickedBtn(event) {
  resetBtnColor();
  event.target.classList.add("clicked");
  selectTip = event.target.innerText;
  selectTip = parseInt(selectTip) / 100;
}

function resetBtnColor() {
  for (let i = 0; i < Object.keys(selectBtn).length; i++) {
    selectBtn[i].classList.remove("clicked");
  }
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
function reset() {
  inputBill.value = null;
  peopleNum.value = null;
  tipRatio.innerText = "$0.00";
  totalRatio.innerText = "$0.00";
}

peopleNum.addEventListener("keyup", showResult);
window.addEventListener("load", reset);
resetBtn.addEventListener("click", reset);
