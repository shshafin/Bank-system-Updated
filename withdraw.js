// // start withdraw
// document.getElementById("withdraw-btn").addEventListener("click", function () {
//   // withdraw input field
//   const newWithdraw = getInputFieldById("with");

//   //   previous withdraw
//   const previousWithdraw = getTextElementById("withdraw-num");

//   //   calculate total withdraw
//   const totalWithdraw = newWithdraw + previousWithdraw;

//   //   set value
//   getTextElementValueById("withdraw-num", totalWithdraw);

//   //   reduce from balance
//   const previousBalance = getTextElementById("balance-num");
//   const newBalance = previousBalance - newWithdraw;
//   getTextElementValueById("balance-num", newBalance);
// });

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdraw = inputField("with");
  if (newWithdraw < 0) {
    alert("positive number dee");
    return;
  }
  if (isNaN(newWithdraw)) {
    alert("number dee!");
    return;
  }
  const balance = getElementByText("balance-num");
  if (newWithdraw > balance) {
    alert("baap er bank e eto taka nai");
    return;
  }
  const totalBalance = balance - newWithdraw;
  setValue("balance-num", totalBalance);
  const previousWithdraw = getElementByText("withdraw-num");
  const totalWithdraw = newWithdraw + previousWithdraw;
  const withdrawValue = setValue("withdraw-num", totalWithdraw);
});
