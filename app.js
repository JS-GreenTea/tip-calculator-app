const tipRatio = document.querySelector(".tip-ratio");
const totalRatio = document.querySelector(".total-ratio");
const inputBill = document.querySelector(".bill");
const selectBtn = document.querySelectorAll("button");
const peopleNum = document.querySelector(".number");
const resetBtn = document.querySelector(".reset");
const ifZero = document.querySelector(".if-zero");
const customTip = document.querySelector(".custom");
let selectTip;

inputBill.addEventListener("click", () => {
  inputBill.style.outlineColor = "hsl(185, 41%, 84%)";
});

peopleNum.addEventListener("click", () => {
  peopleNum.style.outlineColor = "hsl(185, 41%, 84%)";
});

function resetBtnColor() {
  for (let i = 0; i < Object.keys(selectBtn).length; i++) {
    selectBtn[i].classList.remove("clicked");
  }
}

function inputCustom() {
  if (customTip.value) {
    selectTip = parseInt(customTip.value) / 100;
  }
}

function clickedBtn(event) {
  resetBtnColor();
  event.target.classList.add("clicked");
  selectTip = event.target.innerText;
  selectTip = parseInt(selectTip) / 100;
}

function decideZero() {
  if (peopleNum.value === "0") {
    ifZero.innerText = "Can't be zero";
    ifZero.classList.add("not-zero");
    peopleNum.style.outlineColor = "red";
  } else {
    ifZero.innerText = "";
    ifZero.classList.remove("not-zero");
    peopleNum.style.outlineColor = "hsl(185, 41%, 84%)";
  }
}

function showResult() {
  decideZero();
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

for (let i = 0; i < selectBtn.length; i++) {
  selectBtn[i].addEventListener("click", (e) => clickedBtn(e));
}

customTip.addEventListener("keyup", inputCustom);
peopleNum.addEventListener("keyup", showResult);
window.addEventListener("load", reset);
resetBtn.addEventListener("click", reset);
