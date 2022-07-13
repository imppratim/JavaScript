//handle deposit id

function allinput(inputId) {
  const inputDeposit = document.getElementById(inputId);
  const newdepositAmountText = inputDeposit.value;
  const newdepositAmount = parseFloat(newdepositAmountText);
  inputDeposit.value = "";
  return newdepositAmount;
}

function totalupdate(deposit, depositAmount) {
  const totalDeposit = document.getElementById(deposit); // deposit filed ta re dhorsi
  const previousDepositAmountText = totalDeposit.innerText; // deposit filed er jei text oitare nilam
  const previousDepositAmount = parseFloat(previousDepositAmountText); //field ta normally string akare thake tai oitare integer e convert korlam or float

  totalDeposit.innerText = previousDepositAmount + depositAmount; // string tare inner text akare insert kore dilam
}

function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceText);
  return previousBalanceTotal;
}
function updateBalance(depositAmount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotal = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - depositAmount;
  }
}
document.getElementById("deposit-btn").addEventListener("click", function () {
  // button dhorlam and
  const depositAmount = allinput("deposit-input");
  if (depositAmount > 0) {
    updateBalance(depositAmount, true);
    totalupdate("deposit-total", depositAmount);
  }
  //oita ki kaj korbe define korlam
  // const inputDeposit = document.getElementById("deposit-input");
  // const newdepositAmountText = inputDeposit.value;
  // const newdepositAmount = parseFloat(newdepositAmountText);
  //set deposit total

  // updateTotalField("deposit-total", depositAmount);
  // const totalDeposit = document.getElementById("deposit-total"); // deposit filed ta re dhorsi
  // const previousDepositAmountText = totalDeposit.innerText; // deposit filed er jei text oitare nilam
  // const previousDepositAmount = parseFloat(previousDepositAmountText); //field ta normally string akare thake tai oitare integer e convert korlam or float
  // const newDepositTotal = previousDepositAmount + depositAmount; // ager number er sathe notun input tare jog korlam

  // totalDeposit.innerText = newDepositTotal; // string tare inner text akare insert kore dilam

  //update account balance
  // const balanceTotal = document.getElementById("balance-total"); // eta hocche balance er field jekhane taka barbe ba kombe update hobe

  // const balanceTotalText = balanceTotal.innerText; // text take dhorlam balance er
  // const previousBalanceTotal = parseFloat(balanceTotalText); // oitare number e convert korlam
  // const newBalanceTotal = previousBalanceTotal + depositAmount; //ager balance er sathe notun ta jog
  // balanceTotal.innerText = newBalanceTotal; // jog korar por set korlam number ta
});
//handle withdraw event handler
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // const withdrawInput = document.getElementById("withdraw-input");
  // const withdrawAmountText = withdrawInput.value;
  // const withdrawAmount = parseFloat(withdrawAmountText);
  const withdrawAmount = allinput("withdraw-input");
  const getCurrentBlanace = getCurrentBalance();
  if (withdrawAmount > 0 && withdrawAmount < getCurrentBlanace) {
    totalupdate("withdraw-total", withdrawAmount);
    updateBalance(withdrawAmount, false);
  }

  //set withdraw total
  // const withdrawTotal = document.getElementById("withdraw-total");
  // const previousWithdrawText = withdrawTotal.innerText;
  // const previousWithdrawTotal = parseFloat(previousWithdrawText);

  // const newtotalwithdraw = previousWithdrawTotal + withdrawAmount;
  // withdrawTotal.innerText = newtotalwithdraw;

  // after withdrawing balance

  //   const balanceTotal = document.getElementById("balance-total");
  //   const previousBalanceText = balanceTotal.innerText;
  //   const previousBalanceTotal = parseFloat(previousBalanceText);
  //   const newBalanceTotal = previousBalanceTotal - withdrawAmount;
  //   balanceTotal.innerText = newBalanceTotal;
});
