// Input elements
const inputActivityElem = document.querySelector("#input-activity");
const inputTimeElem = document.querySelector("#input-time");
const btnAddElem = document.querySelector("#btn-add");

// List elements
const listElem = document.querySelector("#list-schedule");
const listItemsDeleteBtns = document.querySelectorAll(
  ".list-schedule-item .btn.btn-delete"
);

// Time format: 17:30 => 05:30 PM
const formatTime = (timeString) => {
  const [hourString, minute] = timeString.split(":");
  const hour = +hourString % 24;
  let hourTmp = hour % 12 || 12;
  if (hourTmp < 10) hourTmp = "0" + hourTmp;
  return hourTmp + ":" + minute + (hour < 12 ? "AM" : "PM");
};

const addListItem = (e) => {
  // Prevent submit
  e.preventDefault();

  // Get input value
  const inputActivityValue = inputActivityElem.value;
  const inputTimeValue = inputTimeElem.value;

  // Check for empty, short and long input
  if (
    !inputActivityValue ||
    !inputTimeValue ||
    inputActivityValue.length < 4 ||
    inputActivityValue.length > 50
  )
    return false;

  const inputTimeFormated = formatTime(inputTimeValue).slice(0, -2);
  const inputTimeZone = formatTime(inputTimeValue).slice(-2);

  // How the list item is going to look
  const listItemTemplate = `
    <h2 class="schedule-item-time">
      ${inputTimeFormated} <span class="text-secondary">${inputTimeZone}</span>
    </h2>
    <h2 class="schedule-item-desc">${inputActivityValue}</h2>
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
  listItem
    .querySelector(".btn.btn-delete")
    .addEventListener("click", deleteListItem);
  listElem.appendChild(listItem);

  // Clear and focus input
  clearInput(inputActivityElem);
  clearInput(inputTimeElem);
  inputActivityElem.focus();
};

const deleteListItem = (e) => {
  e.target.closest(".list-schedule-item").remove();
};

const clearInput = (elem) => {
  elem.value = "";
};

// Clear input on load
window.onload = () => {
  clearInput(inputActivityElem);
  clearInput(inputTimeElem);
};

// Add list item
btnAddElem.addEventListener("click", addListItem);
inputActivityElem.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !inputTimeElem.value) inputTimeElem.focus();
});

// Delete list item for existing list items
for (let i = 0; i < listItemsDeleteBtns.length; i++) {
  listItemsDeleteBtns[i].addEventListener("click", deleteListItem);
}
