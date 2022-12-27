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

  const listItemTemplate = `
    <h2 class="schedule-item-time">
      08:00 <span class="text-secondary">AM</span>
    </h2>
    <h2 class="schedule-item-desc">${inputAddValue}</h2>
    <div class="schedule-item-btns">
      <button class="btn btn-icon btn-update">
        <i class="fa-regular fa-pen-to-square"></i>
      </button>
      <button class="btn btn-icon btn-delete">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `;

  // Create, set text and append to list
  const listItem = document.createElement("li");
  listItem.classList = 'list-schedule-item';
  listItem.innerHTML = DOMPurify.sanitize(listItemTemplate);
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
