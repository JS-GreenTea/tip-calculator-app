const billNumElement = document.querySelector("#bill");
const tipsButton = document.querySelectorAll('input[name="tip"]');
const tipCustomElement = document.querySelector("#tip-custom");
const numberOfPeopleElement = document.querySelector("#number-of-people");
const numberOfPeopleErrorElement = document.querySelector(
  "#number-of-people-error"
);
const resetButton = document.querySelector("#reset");
const resultTipAmountElement = document.querySelector("#result-tip-amount");
const resultTipTotalElement = document.querySelector("#result-total");

const tips = {
  set billNum(changeNum) {
    this._billNum = changeNum;
    this.tipChangeObserver();
  },
  set tip(changeNum) {
    this._tip = changeNum;
    this.tipChangeObserver();
  },
  set numberOfPeople(changeNumber) {
    this._numberOfPeople = changeNumber;
    this.tipChangeObserver();
  },
  set tipAcount(value) {
    this._tipAcount = value;
  },
  set tipTotal(value) {
    this._tipTotal = value;
  },
  get tipAcount() {
    return this._tipAcount;
  },
  get tipTotal() {
    return this._tipTotal;
  },
  tipChangeObserver() {
    if (
      !(
        this._billNum != undefined &&
        this._numberOfPeople != undefined &&
        this._tip != undefined
      )
    ) {
      return;
    }
    if (!(this._billNum > 0 && this._numberOfPeople > 0 && this._tip > 0)) {
      return;
    }
    this._tipTotal = this._billNum * this._tip;
    this._tipAcount = this._tipTotal / this._numberOfPeople;
    changeResult(this._tipAcount, this._tipTotal);
  },
};

const billNumChagneListner = function (event) {
  tips.billNum = +event.target.value;
};

const tipsButtonClickListner = function (event) {
  tips.tip = +event.target.value;
};

const tipCustomFocusListner = function (event) {
  const clickedTip = document.querySelector('input[name="tip"]:checked');
  if (clickedTip != null) clickedTip.checked = false;
  tips.tip = +event.target.value / 100;
};

const tipCustomChangeListner = function (event) {
  tips.tip = +event.target.value / 100;
};

const numberOfPeopleChagneListner = function (event) {
  if (+event.target.value <= 0) {
    numberOfPeopleElement.style.border = "2px solid #8f3610";
    numberOfPeopleErrorElement.style.display = "block";
    tips.numberOfPeople = 0;
    return;
  }
  numberOfPeopleElement.style.removeProperty("border");
  numberOfPeopleErrorElement.style.display = "none";
  tips.numberOfPeople = +event.target.value;
};

const resetButtonClickListner = function () {
  tips.billNum = 0;
  tips.numberOfPeople = 0;
  tips.tip = 0;
  tips.tipAcount = 0;
  tips.tipTotal = 0;
  billNumElement.value = "";
  tipCustomElement.value = "";
  numberOfPeopleElement.value = "";
  const clickedTip = document.querySelector('input[name="tip"]:checked');
  if (clickedTip != null) {
    clickedTip.checked = false;
  }
  changeResult(0, 0);
};

const changeResult = (tipAmount, tipTotal) => {
  resultTipAmountElement.innerText = tipAmount.toFixed(2);
  resultTipTotalElement.innerText = tipTotal.toFixed(2);
};

billNumElement.addEventListener("change", billNumChagneListner);
tipCustomElement.addEventListener("change", tipCustomChangeListner);
tipCustomElement.addEventListener("focus", tipCustomFocusListner);
tipsButton.forEach((tipButton) => {
  tipButton.addEventListener("click", tipsButtonClickListner);
});
numberOfPeopleElement.addEventListener("change", numberOfPeopleChagneListner);
resetButton.addEventListener("click", resetButtonClickListner);
