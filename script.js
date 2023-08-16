function checkInput() {
  let userInput = document.getElementById("textboxInput").value;
  let messageElement = document.getElementById("message");
  let coolThings = ['sid', 'charlie', 'gaming'];

  if (userInput === "") {
    messageElement.textContent = "HUH.";
  } else if (coolThings.includes(userInput)) {
    messageElement.textContent = "hehe thats funny";
  } else {
    messageElement.textContent = "Not funny man really not cool at all like cmon bro.";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let checkButton = document.getElementById("checkButton");
  checkButton.addEventListener("click", checkInput);
});
