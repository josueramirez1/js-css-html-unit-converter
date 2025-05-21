const primaryInput = document.querySelector("#primary-input");
const secondaryInput = document.querySelector("#secondary-input");
const primarySelect = document.querySelector("#primary-units");
const secondarySelect = document.querySelector("#secondary-units");

primaryInput.value = 0;
secondaryInput.value = 0;

function update(e) {
  const elementId = e.target.id;

  if (elementId === "secondary-input") {
    primaryInput.value = calculate(
      secondarySelect.value,
      primarySelect.value,
      secondaryInput.value
    );
  } else {
    secondaryInput.value = calculate(
      primarySelect.value,
      secondarySelect.value,
      primaryInput.value
    );
  }
}

function calculate(firsTempUnit, secondTempUnit, temp) {
  if (firsTempUnit === secondTempUnit) return temp;

  const combination = firsTempUnit + "-" + secondTempUnit;
  let result;

  switch (combination) {
    case "Fahrenheit-Celsius":
      result = ((Number(temp) - 32) * 5) / 9;
      break;
    case "Celsius-Fahrenheit":
      result = (Number(temp) * 9) / 5 + 32;
      break;
    case "Kelvin-Fahrenheit":
      result = ((Number(temp) - 273.15) * 9) / 5 + 32;
      break;
    case "Kelvin-Celsius":
      result = Number(temp) - 273.15;
      break;
    case "Fahrenheit-Kelvin":
      result = ((Number(temp) - 32) * 5) / 9 + 273.15;
      break;
    case "Celsius-Kelvin":
      result = Number(temp) + 273.15;
      break;
  }

  return result.toFixed(2);
}

[primaryInput, secondaryInput, primarySelect, secondarySelect].forEach(
  (element) => element.addEventListener("change", update)
);
