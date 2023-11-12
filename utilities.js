// // DRY===do not repeat yourself

// // make new function
// function getInputFieldById(inputId) {
//   const inputField = document.getElementById(inputId);
//   const inputFieldValue = Number(inputField.value);
//   inputField.value = "";
//   return inputFieldValue;
// }

// // make previous function
// function getTextElementById(elementId) {
//   const textElement = document.getElementById(elementId);
//   const textElementValue = Number(textElement.innerText);
//   return textElementValue;
// }

// // set value
// function getTextElementValueById(elementId, newValue) {
//   const textElement = document.getElementById(elementId);
//   textElement.innerText = newValue;
// }

// press F12 for get the definition
// input field
function inputField(input) {
  const textArea = document.getElementById(input);
  const inputValue = Number(textArea.value);
  textArea.value = "";
  return inputValue;
}

// text function
function getElementByText(element) {
  const elementId = document.getElementById(element);
  const elementValue = Number(elementId.innerText);
  return elementValue;
}

// set value
function setValue(element, newValue) {
  const elementId = document.getElementById(element);
  elementId.innerText = Number(newValue);
}
