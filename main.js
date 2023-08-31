const userInput = document.querySelector("#user-input");
const convertButton = document.querySelector("#convert-button");
const lengthConversion = document.querySelector("#length-conversion");
const volumeConversion = document.querySelector("#volume-conversion");
const massConversion = document.querySelector("#mass-conversion");

convertButton.addEventListener("click", (event) => {
  event.preventDefault();

  // Validate the user input as a number
  const inputNumber = parseFloat(userInput.value);

  console.log(!isNaN(inputNumber));

  if (!isNaN(inputNumber)) {
    const lengthText = convertLength(inputNumber);
    const volumeText = convertLength(inputNumber);
    const massText = convertLength(inputNumber);

    lengthConversion.textContent = lengthText;
    volumeConversion.textContent = volumeText;
    massConversion.textContent = massText;
  } else {
    //Handle the case where the input is not a number
    lengthConversion.textContent = "Invalid input. Please enter a valid number";
    volumeConversion.textContent = "Invalid input. Please enter a valid number";
    massConversion.textContent = "Invalid input. Please enter a valid number";
  }
});

const convertLength = (userInput) => {
  const meterToFeet = (userInput * 3.28084).toFixed(3);
  const feetToMeter = (userInput * 0.3048).toFixed(3);

  return `${userInput} meters = ${meterToFeet} feet | ${userInput} feet = ${feetToMeter} meters`;
};

const convertVolume = (userInput) => {
  const litreToGallon = (userInput * 0.264172).toFixed(3);
  const gallonToLitre = (userInput * 3.78541).toFixed(3);

  return `${userInput} litres = ${litreToGallon} gallons | ${userInput} gallons = ${gallonToLitre} litres`;
};

const convertMass = (userInput) => {
  const kiloToPound = (userInput * 2.20462).toFixed(3);
  const PoundToKilo = (userInput * 0.453592).toFixed(3);

  return `${userInput} kilos = ${kiloToPound} pounds | ${userInput} pounds = ${PoundToKilo} kilos`;
};

userInput.addEventListener("mousewheel", function (event) {
  event.target.blur();
});
