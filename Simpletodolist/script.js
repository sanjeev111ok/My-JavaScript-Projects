//Select all elements
const form = document.querySelector("#new-item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");
//When i submit the form add a new element
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Create a new Element
  const item = document.createElement("div");
  item.innerText = input.value;
  item.classList.add("list-item");

  console.log(item);

  //add the item to the list
  list.appendChild(item);
  input.value = "";

  item.addEventListener("click", () => {
    list.removeChild(item);
  });
});
