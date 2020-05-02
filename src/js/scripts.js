'use strict';

////////show how to work betslip showing block

const betsTableItemsList = document.querySelectorAll('.bets-table__item');
const betsTableBetslip = document.querySelector('.bets-table__betslip-js');
const betsText = Array.from(document.querySelectorAll('odds-val__item-num'));

if (betsTableItemsList.length > 0) {
  const itemsList = Array.from(betsTableItemsList);
  let betslipBtnVal = 0;

  itemsList.map(item => {
    item.addEventListener('click', showCurrentBetslipVal);
  });

  function showCurrentBetslipVal() {
    const currentMainParrent = event.currentTarget;
    const currentElement = event.target.closest('.odds-val__item');

    if (currentElement.classList.contains('odds-val__item')) {
      const currentElementParent = currentElement.parentElement;
      if (currentElement.classList.contains('yellow-bgc')) {
        currentElement.classList.remove('yellow-bgc');
        betslipBtnVal = betslipBtnVal - 1;
        showHideBetslip(betslipBtnVal, currentMainParrent);
        return;
      }
      Array.from(currentElementParent.children).map(el => {
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
  }

  function showHideBetslip(val, parent) {
    parent.after(betsTableBetslip);
    const betslipBtnval = (document.querySelector(
      '.bets-table__betslip-btn-val-js',
    ).textContent = `(${val})`);
    if (val > 0) {
      betsTableBetslip.style = 'display: flex';
    } else {
      betsTableBetslip.style = 'display: none';
    }
  }
}


//main nav
function classToggle() {
  this.classList.toggle('is-active');
}
document.querySelector('.hamburger').addEventListener('click', classToggle);


