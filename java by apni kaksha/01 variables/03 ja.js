alert("Hello, this is an alert!");


var result = confirm("Do you want to proceed?");
if (result === true) {
  console.log("User clicked OK");
} else {
  console.log("User clicked Cancel");
}

var userInput = prompt("Please enter your name:", "John Doe");
if (userInput !== null) {
  console.log("Hello, " + userInput + "!");
} else {
  console.log("User clicked Cancel");
}
