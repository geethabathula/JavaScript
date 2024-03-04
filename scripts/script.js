/*
const geetha = {
  firstName: "Geetha Supriya",
  lastName: "Bathula",
  eyeColor: "brown",
  birthYear: 1999,
};
//this line creates a new object. in this way we can preserve the previous data
const geethaCopy = Object.assign({}, geetha);
geethaCopy.lastName = "Kalepu";
console.log("Before Marriage: ", geetha);
console.log("After Marriage: ", geethaCopy);
*/

const characterLimit = 20;
let userInput = prompt("Enter your name:");
function checkCharacterCount(userInput) {
  return userInput.length > characterLimit ? `You have exceeded charcter limit please enter below or equal to ${characterLimit}` :
    `You have entered ${userInput.length} charcters`;
}
console.log(checkCharacterCount(userInput));