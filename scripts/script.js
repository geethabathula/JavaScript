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
