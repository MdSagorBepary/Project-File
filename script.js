document.getElementById("logInBtn").addEventListener("click", function () {
  document.getElementById("firstContainer").style.display = "none";
  document.getElementById("secondContainer").style.display = "block";
});
 // function for updateing deposit & withdraw money;
function addDeposit(currentId, enteredAmount) {
  let takingInnerText = document.getElementById(currentId).innerText;
  let innerNum = parseFloat(takingInnerText);
  let total = innerNum + enteredAmount;
  document.getElementById(currentId).innerText = total;
}
// A little function to collect input value  for common use in different event handler.
function gettingInpVal(inputId){
  let inputVal=document.getElementById(inputId).value;
   let inputValNum=parseFloat(inputVal);
   return inputValNum;
}
document.getElementById("depositBtn").addEventListener("click", function () {
   let enteredAmount= gettingInpVal("depositAmount");
   addDeposit("currentDeposit", enteredAmount);
   addDeposit("currentBalance",enteredAmount);
  document.getElementById("depositAmount").value = "";
});

// Event handler for reducing withdrawal money from balance
document.getElementById("withdrawBtn").addEventListener('click',function(){
  let enteredAmount= gettingInpVal("withdaralAmount");
  addDeposit("currentWithdrawal",enteredAmount);
  balanceReducing(enteredAmount);
  document.getElementById("withdaralAmount").value='';
  
})
function balanceReducing(enteredAmount){
  let currentBalance=document.getElementById("currentBalance").innerText;
  let balanceNum=parseFloat(currentBalance);
  document.getElementById("currentBalance").innerText=balanceNum-enteredAmount;
}