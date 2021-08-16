function doubleIt(num) {
    const result = num * 2;
    return result;
}
const fiveDouble = doubleIt(5);
const sevenDouble = doubleIt(7);

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';
    return amountValue;


}
function updateTotalField(totalField, depositeAmount) {
    const depositeTotal = document.getElementById(totalField);
    const depositeTotalText = depositeTotal.innerText;

    const previousDepositeTotal = parseFloat(depositeTotalText);
    depositeTotal.innerText = previousDepositeTotal + depositeAmount;
}



document.getElementById('Deposite-button').addEventListener('click', function () {
    /* const depositeInput = document.getElementById('deposite-input');
     const depositeAmountText = depositeInput.value;
     const depositeAmount = parseFloat(depositeAmountText);*/
    const depositeAmount = getInputValue('deposite- input');

    // get and update  deposite total

    // const depositeTotal = document.getElementById('deposite-total');
    // const depositeTotalText = depositeTotal.innerText;

    // const previousDepositeTotal = parseFloat(depositeTotalText);
    // depositeTotal.innerText = previousDepositeTotal + depositeAmount;
    updateTotalField('deposite-total', depositeAmount);
    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositeAmount;


})

// handle withdraw button 
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawAmount = getInputValue('withdraw-input');

    // get and update withdraw total

    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    updateTotalField('withdraw-total', withdrawAmount);

    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // update balance after withdraw 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;



})