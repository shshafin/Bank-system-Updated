// // start even handler
// document.getElementById("deposit-btn").addEventListener("click", function () {
//   // new deposit
//   const newDeposit = getInputFieldById("dep");

//   //   previous deposit
//   const previousDepositTotal = getTextElementById("deposit-num");

//   //   calculate new deposit value
//   const newDepositTotal = previousDepositTotal + newDeposit;

//   //   set new value
//   getTextElementValueById("deposit-num", newDepositTotal);

//   //   add into balance
//   const previousBalance = getTextElementById("balance-num");
//   const newBalance = previousBalance + newDeposit;
//   getTextElementValueById("balance-num", newBalance);
// });

document.getElementById("deposit-btn").addEventListener("click", function () {
  const newDeposit = inputField("dep");
  if (newDeposit < 0) {
    alert("please provide a valid number");
    return;
  }
  if (isNaN(newDeposit)) {
    alert("provide a number");
    return;
  }
  const previousDeposit = getElementByText("deposit-num");
  const totalDeposit = newDeposit + previousDeposit;
  const depositValue = setValue("deposit-num", totalDeposit);
  const balance = getElementByText("balance-num");
  const totalBalance = balance + newDeposit;
  setValue("balance-num", totalBalance);
});
