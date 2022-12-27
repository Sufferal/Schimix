// Input elements
const inputAddElem = document.querySelector("#input-add");
const btnAddElem = document.querySelector("#btn-add");

// List elements
const listElem = document.querySelector("#list-schedule");
const listItemsDeleteBtns = document.querySelectorAll(
  ".list-schedule-item .btn.btn-delete"
);

const addListItem = (e) => {
  // Prevent submit
  e.preventDefault();

  // Get input value
  const inputAddValue = inputAddElem.value;

  // Check for empty, short and long input
  if (!inputAddValue || inputAddValue.length < 4 || inputAddValue.length > 50)
    return false;

  // How the list item is going to look
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
  listItem.classList = "list-schedule-item";
  listItem.innerHTML = DOMPurify.sanitize(listItemTemplate);
  listItem.addEventListener("click", deleteListItem);
  listElem.appendChild(listItem);

  // Clear and focus input
  clearInput(inputAddElem);
  inputAddElem.focus();
};

const deleteListItem = (e) => {
  e.target.closest(".list-schedule-item").remove();
};

const clearInput = (elem) => {
  elem.value = "";
};

// Clear input on load
window.onload = () => clearInput(inputAddElem);

// Add list item
btnAddElem.addEventListener("click", addListItem);
inputAddElem.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addListItem(e);
  }
});

// Delete list item for existing list items
for (let i = 0; i < listItemsDeleteBtns.length; i++) {
  listItemsDeleteBtns[i].addEventListener("click", deleteListItem);
}
