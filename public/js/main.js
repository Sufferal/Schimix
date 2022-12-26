const inputAddElem = document.querySelector("#input-add");
const btnAddElem = document.querySelector("#btn-add");

const listElem = document.querySelector("#list-schedule");

// Clear input on load
window.onload = () => clearInput(inputAddElem);

const addListItem = (e) => {
  // Prevent submit
  e.preventDefault();

  // Get input value
  const inputAddValue = inputAddElem.value;

  // Check for empty, short and long input
  if (!inputAddValue || inputAddValue.length < 4 || inputAddValue.length > 50)
    return false;

  // Create, set text and append to list
  const listItem = document.createElement("li");
  listItem.textContent = inputAddValue;
  listElem.appendChild(listItem);

  // Clear and focus input
  clearInput(inputAddElem);
  inputAddElem.focus();
};

inputAddElem.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addListItem(e);
  }
});

btnAddElem.addEventListener("click", addListItem);

const clearInput = (elem) => {
  elem.value = "";
};
