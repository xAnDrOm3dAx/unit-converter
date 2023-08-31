const userInput = document.querySelector("#user-input");
const convertButton = document.querySelector("#convert-button");
const conversionForm = document.querySelector("#conversion-form");
const lengthConversion = document.querySelector("#length-conversion");
const volumeConversion = document.querySelector("#volume-conversion");
const massConversion = document.querySelector("#mass-conversion");
const resetButton = document.querySelector("#reset-button");

conversionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Validate the user input as a number
  const inputNumber = parseFloat(userInput.value);

  console.log(!isNaN(inputNumber));

  if (!isNaN(inputNumber)) {
    const lengthText = convertLength(inputNumber);
    const volumeText = convertVolume(inputNumber);
    const massText = convertMass(inputNumber);

    lengthConversion.innerHTML = lengthText;
    volumeConversion.innerHTML = volumeText;
    massConversion.innerHTML = massText;
  } else {
    //Handle the case where the input is not a number
    lengthConversion.innerHTML = "Invalid entry, <br> please enter a valid number";
    volumeConversion.innerHTML = "Invalid entry, <br> please enter a valid number";
    massConversion.innerHTML = "Invalid entry, <br> please enter a valid number";
  }

  userInput.value = null;
});

const convertLength = (userInput) => {
  const meterToFeet = (userInput * 3.28084).toFixed(3);
  const feetToMeter = (userInput * 0.3048).toFixed(3);

  return `${userInput} meters = ${meterToFeet} feet <br> ${userInput} feet = ${feetToMeter} meters`;
};

const convertVolume = (userInput) => {
  const litreToGallon = (userInput * 0.264172).toFixed(3);
  const gallonToLitre = (userInput * 3.78541).toFixed(3);

  return `${userInput} litres = ${litreToGallon} gallons <br> ${userInput} gallons = ${gallonToLitre} litres`;
};

const convertMass = (userInput) => {
  const kiloToPound = (userInput * 2.20462).toFixed(3);
  const PoundToKilo = (userInput * 0.453592).toFixed(3);

  return `${userInput} kilos = ${kiloToPound} pounds <br> ${userInput} pounds = ${PoundToKilo} kilos`;
};

userInput.addEventListener("mousewheel", function (event) {
  event.target.blur();
});

resetButton.addEventListener("click", () => {
  window.location.reload();
});
