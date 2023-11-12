// // deposit
// document.getElementById("deposit-btn").addEventListener("click", function () {
//   // add deposit text area
//   const deposit = document.getElementById("dep");
//   const depositValue = Number(deposit.value);
//   // clear input area
//   deposit.value = "";

//   //   validation
//   if (depositValue < 0) {
//     alert("please provide positive input");
//     return;
//   }
//   if (isNaN(depositValue)) {
//     alert("please provide a valid number");
//     return;
//   }

//   // add deposit amount
//   const depositNumber = document.getElementById("deposit-num");
//   const depositNumberValue = Number(depositNumber.innerText);
//   const depositTotal = depositNumberValue + depositValue;
//   depositNumber.innerText = depositTotal;

//   //   balance
//   const balance = document.getElementById("balance-num");
//   const balanceValue = Number(balance.innerText);
//   const balanceTotal = balanceValue + depositValue;
//   balance.innerText = balanceTotal;
// });





// // withdraw
// document.getElementById("withdraw-btn").addEventListener("click", function () {
//   // add deposit text area
//   const withdraw = document.getElementById("with");
//   const withdrawValue = Number(withdraw.value);
//   // clear input area
//   withdraw.value = "";
//   //   validation
//   if (withdrawValue < 0) {
//     alert("please provide positive input");
//     return;
//   }
//   if (isNaN(withdrawValue)) {
//     alert("please provide a valid number");
//     return;
//   }

//   //   balance
//   const balance = document.getElementById("balance-num");
//   const balanceValue = Number(balance.innerText);
//   //   validation
//   if (withdrawValue > balanceValue) {
//     alert("Balance Nai");
//     return;
//   }
//   const balanceTotal = balanceValue - withdrawValue;
//   balance.innerText = balanceTotal;

//   //   withdraw amount
//   const withdrawNumber = document.getElementById("withdraw-num");
//   const withdrawNumberValue = Number(withdrawNumber.innerText);
//   withdrawNumber.innerText = withdrawNumberValue + withdrawValue;
// });
