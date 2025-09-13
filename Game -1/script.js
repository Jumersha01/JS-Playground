

let parent = document.querySelector(".container");
let addBtn = document.querySelector(".add");
let removeBtn = document.querySelector(".remove");

let count = 0;

addBtn.addEventListener("click", () => {
  count++;

  let div = document.createElement("div");
  div.className = "all";
  div.textContent = `This is div No ${count}`;

  parent.appendChild(div);
});


removeBtn.addEventListener("click", () => {
  if (parent.lastElementChild) {
    parent.removeChild(parent.lastElementChild);
    count--; 
  }
});
