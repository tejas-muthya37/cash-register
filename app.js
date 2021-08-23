const billAmount = document.querySelector("#bill-amt");
const btnCheck = document.querySelector("#btn-check");
const btnNext = document.querySelector("#btn-next");
const cashAmount = document.querySelector("#cash-amt");
const errorMsg = document.querySelector("#msg-error");
const numberOfNotes = document.querySelectorAll(".noOfNotes");
const conditionalDiv = document.querySelector(".conditional-div");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
const changeTable = document.querySelector(".change-table");

function showMessage(message) {
  errorMsg.style.display = "block";
  errorMsg.innerText = message;
}

function calculateChange(changeAmount) {
  for (var i = 0; i < availableNotes.length; i++) {
    var noOfNotes = Math.trunc(changeAmount / availableNotes[i]);
    if (noOfNotes === 0) {
      numberOfNotes[i].innerText = "";
    } else {
      numberOfNotes[i].innerText = noOfNotes;
    }
    changeAmount = changeAmount % availableNotes[i];
  }
}

btnCheck.addEventListener("click", function () {
  errorMsg.style.display = "none";

  if (Number(cashAmount.value) > Number(billAmount.value)) {
    changeTable.classList.remove("change-table");
    var changeAmount = cashAmount.value - billAmount.value;
    calculateChange(changeAmount);
  } else {
    showMessage("Cash paid cannot be less than bill amount.");
  }
});

btnNext.addEventListener("click", function () {
  // errorMsg.style.display = "none";
  if (billAmount.value > 0) conditionalDiv.classList.remove("conditional-div");
  // else showMessage("Bill amount needs to be valid.");
});
