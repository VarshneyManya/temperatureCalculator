
const temperature = document.querySelector(".temperature input");
const result = document.querySelector(".result input");
const inputTemperatureUnit = document.querySelector(".temperature select");
const resultTemperatureUnit = document.querySelector(".result select");

temperature.oninput = function () {
  let inputTemperatureUnitValue = inputTemperatureUnit.value;
  let resultTemperatureUnitValue = resultTemperatureUnit.value;

  // From Celsius To Other Units
  let CelsiusToKelvin = inputTemperatureUnitValue === "Celsius" && resultTemperatureUnitValue === "Kelvin";
  let CelsiusToFahrenheit = inputTemperatureUnitValue === "Celsius" && resultTemperatureUnitValue === "Fahrenheit";
  let CelsiusToRankine = inputTemperatureUnitValue === "Celsius" && resultTemperatureUnitValue === "Rankine";

  // From Kelvin to Other Units
  let KelvinToCelsius = inputTemperatureUnitValue === "Kelvin" && resultTemperatureUnitValue === "Celsius";
  let KelvinToFahrenheit = inputTemperatureUnitValue === "Kelvin" && resultTemperatureUnitValue === "Fahrenheit";
  let KelvinToRankine = inputTemperatureUnitValue === "Kelvin" && resultTemperatureUnitValue === "Rankine";

  // From Fahrenheits to Other Units
  let FahrenheitToCelsius = inputTemperatureUnitValue === "Fahrenheit" && resultTemperatureUnitValue === "Celsius";
  let FahrenheitToKelvin = inputTemperatureUnitValue === "Fahrenheit" && resultTemperatureUnitValue === "Kelvin";
  let FahrenheitToRankine = inputTemperatureUnitValue === "Fahrenheit" && resultTemperatureUnitValue === "Rankine";

  // From Rankine to other
  let RankineToKelvin = inputTemperatureUnitValue === "Rankine" && resultTemperatureUnitValue === "Kelvin";
  let RankineToCelsius = inputTemperatureUnitValue === "Rankine" && resultTemperatureUnitValue === "Celsius";
  let RankineToFahreheit = inputTemperatureUnitValue === "Rankine" && resultTemperatureUnitValue === "Fahrenheit";

  // From the Same Unit to Same unit
  let sameUnits = inputTemperatureUnitValue === resultTemperatureUnitValue;

  // Calculations...
  let inputTemperatureValue = temperature.value;
  let convertTemperature = 0;

  if (CelsiusToKelvin) {
    convertTemperature = (inputTemperatureValue * 1) + 273.15;
    result.value = convertTemperature.toFixed(2);
  }
  else if (CelsiusToFahrenheit) {
    convertTemperature = (9 / 5 * inputTemperatureValue) + 32;
    result.value = convertTemperature.toFixed(2);
  }
  else if (CelsiusToRankine) {
    convertTemperature = (9 / 5) * ((inputTemperatureValue * 1 )+ 273.15);
    result.value = convertTemperature.toFixed(2);
  }
  else if (KelvinToCelsius) {
    convertTemperature = (inputTemperatureValue - 273.15);
    result.value = convertTemperature.toFixed(2);
  }
  else if (KelvinToFahrenheit) {
    convertTemperature = 9 / 5 * (inputTemperatureValue - 273.15) + 32;
    result.value = convertTemperature.toFixed(2);
  }
  else if (KelvinToRankine) {
    convertTemperature = 9 / 5 * inputTemperatureValue;
    result.value = convertTemperature.toFixed(2);
  }
  else if (FahrenheitToCelsius) {
    convertTemperature = 5 / 9 * (inputTemperatureValue - 32);
    result.value = convertTemperature.toFixed(2);
  }
  else if (FahrenheitToKelvin) {
    convertTemperature = 5 / 9 * (inputTemperatureValue - 32) + 273.15;
    result.value = convertTemperature.toFixed(2);
  }
  else if (FahrenheitToRankine) {
    convertTemperature =(inputTemperatureValue*1 )+ 459.67;
    result.value = convertTemperature.toFixed(2);
  }
  else if (RankineToKelvin) {
    convertTemperature = 5 / 9 * inputTemperatureValue;
    result.value = convertTemperature.toFixed(2);
  }
  else if (RankineToCelsius) {
    convertTemperature = (5 / 9 * inputTemperatureValue - 273.15);
    result.value = convertTemperature.toFixed(2);
  }
  else if (RankineToFahreheit) {
    convertTemperature = inputTemperatureValue - 459.67;
    result.value = convertTemperature.toFixed(2);
  }
  else if (sameUnits) {
    result.value = inputTemperatureValue;
  }
}