// function compareNumbers() {
//   var num1 = Number(document.getElementById("num1").value);
//   var num2 = Number(document.getElementById("num2").value);

//   if (Number(num1) && Number(num2)) {
//     var result;
//     if (num1 > num2) {
//       result = "First number is bigger.";
//     } else if (num2 > num1) {
//       result = "Second number is bigger.";
//     } else {
//       result = "Both numbers are equal.";
//     }

//     document.getElementById("result").textContent = result;
//   } else {
//     alert("Please enter valid numbers in both fields.");
//   }
// }

let firstnumber = "";
let secondnumber = "";
let biggerNumber;

const firstNumberInput = document.getElementById("num1");
firstNumberInput.addEventListener("input", function () {
  firstnumber = event.target.value;
  console.log(firstnumber);
});

const secondNumberInput = document.getElementById("num2");
secondNumberInput.addEventListener("input", function () {
  secondnumber = event.target.value;
  console.log(secondnumber);
});

const compareButton = document.getElementById("compare-button");
compareButton.addEventListener("click", function () {
  if (firstnumber === "" || secondnumber === "") {
    alert("please fill in all the fields ");
  } else {
    if (Number(firstnumber) > Number(secondnumber)) {
      biggerNumber = Number(firstnumber);
    } else if (Number(secondnumber) > Number(firstnumber)) {
      biggerNumber = Number(secondnumber);
    } else {
      biggerNumber = "Both numbers are equal.";
    }
    const compareDisplay = document.getElementById("result");
    compareDisplay.innerHTML = `number: ${biggerNumber}`;

    firstNumberInput.value = "";
    secondNumberInput.value = "";
  }
});
