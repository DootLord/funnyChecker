let coolThings = ['sid', 'charlie', 'gaming'];
const effect = "rotateComplex";

/**
 * This shit hit da gwiddy
 */
function checkInput() {
  const userInput = document.getElementById("checkTextInput").value;
  document.getElementById("message").classList.remove(effect);
  let selectedMessage = "Not funny man really not cool at all like cmon bro.";

  if (userInput === "") {
    selectedMessage = "HUH.";
  } else if (coolThings.includes(userInput)) {
    selectedMessage = "hehe thats funny";
  }

  document.getElementById("message").textContent = selectedMessage;
  setTimeout(function () {
    document.getElementById("message").classList.add(effect);
  }, 100)

}

/**
 * idk lol ඞ
 */
function addInput() {
  coolThings.push(document.getElementById("newTextInput").value);
}

document
  .getElementById("checkButton")
  .addEventListener("click", checkInput);

document
  .getElementById("newButton")
  .addEventListener("click", addInput);