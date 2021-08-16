function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    // debugger
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    } else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('deposit-button').addEventListener('click', function () {
    /*  const depositInput = document.getElementById('deposit-input');
     const depositAmountText = depositInput.value;
     const depositAmount = parseFloat(depositAmountText); */


    //get current deposit
    /*    const depositTotal = document.getElementById('deposit-total');
       const depositTotalText = depositTotal.innerText;
       const previousDepositTotal = parseFloat(depositTotalText);
       //total deposit
       depositTotal.innerText = previousDepositTotal + depositAmount; */



    // update balance
    /*  const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(balanceTotalText);
     balanceTotal.innerText = previousBalanceTotal + depositAmount; */
    // clear input field
    // depositInput.value = '';

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});

//handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {
    /*    const withdrawInput = document.getElementById('withdraw-input');
       const withdrawAmountText = withdrawInput.value;
       const withdrawAmount = parseFloat(withdrawAmountText); */

    //get current withdraw total
    /*   const withdrawTotal = document.getElementById('withdraw-total');
      const previousWithdrawTotalText = withdrawTotal.innerText;
      const previousWithdrawTotal = parseFloat(previousWithdrawTotalText); */

    //total withdraw
    /*     const newWithdrawTotal = previousWithdrawTotal + withdrawAmount;
        withdrawTotal.innerText = newWithdrawTotal; */
    //short version
    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; 





    //update balance after withdraw
    /*   const balanceTotal = document.getElementById('balance-total');
      const balanceTotalText = balanceTotal.innerText;
      const previousBalanceTotal = parseFloat(balanceTotalText);
      balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */
    //clear input field
    // withdrawInput.value = '';


    const withdrawAmount = getInputValue('withdraw-input');
    if (withdrawAmount > 0) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
})