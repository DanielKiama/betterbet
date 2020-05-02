'use strict'; ////////show how to work betslip showing block

var betsTableItemsList = document.querySelectorAll('.bets-table__item');
var betsTableBetslip = document.querySelector('.bets-table__betslip-js');
var betsText = Array.from(document.querySelectorAll('odds-val__item-num'));

if (betsTableItemsList.length > 0) {
  var showCurrentBetslipVal = function showCurrentBetslipVal() {
    var currentMainParrent = event.currentTarget;
    var currentElement = event.target.closest('.odds-val__item');

    if (currentElement.classList.contains('odds-val__item')) {
      var currentElementParent = currentElement.parentElement;

      if (currentElement.classList.contains('yellow-bgc')) {
        currentElement.classList.remove('yellow-bgc');
        betslipBtnVal = betslipBtnVal - 1;
        showHideBetslip(betslipBtnVal, currentMainParrent);
        return;
      }

      Array.from(currentElementParent.children).map(function (el) {
        if (el.classList.contains('yellow-bgc')) {
          betslipBtnVal = betslipBtnVal - 1;
          showHideBetslip(betslipBtnVal, currentMainParrent);
        }

        el.classList.remove('yellow-bgc');
      });
      currentElement.classList.add('yellow-bgc');

      if (betslipBtnVal <= betsTableItemsList.length) {
        betslipBtnVal = betslipBtnVal + 1;
        showHideBetslip(betslipBtnVal, currentMainParrent);
      }
    }
  };

  var showHideBetslip = function showHideBetslip(val, parent) {
    parent.after(betsTableBetslip);
    var betslipBtnval = document.querySelector('.bets-table__betslip-btn-val-js').textContent = "(".concat(val, ")");

    if (val > 0) {
      betsTableBetslip.style = 'display: flex';
    } else {
      betsTableBetslip.style = 'display: none';
    }
  };

  var itemsList = Array.from(betsTableItemsList);
  var betslipBtnVal = 0;
  itemsList.map(function (item) {
    item.addEventListener('click', showCurrentBetslipVal);
  });
} //main nav


function classToggle() {
  this.classList.toggle('is-active');
}

document.querySelector('.hamburger').addEventListener('click', classToggle);