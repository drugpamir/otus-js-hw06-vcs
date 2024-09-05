const paragraphs = document.querySelector("#paragraphs");

const input = document.querySelector("input");
input.addEventListener("input", (ev) => {
  addButton.hidden = ev.target.value.length === 0;
});

const addButton = document.querySelector("#addButton");
addButton.hidden = true;
addButton.addEventListener("click", (ev) => {
  const inputText = input.value;
  input.value = "";
  ev.target.hidden = true;

  const p = document.createElement("p");
  p.innerHTML = inputText;
  paragraphs.append(p);
  if (paragraphs.querySelectorAll("p").length > 5) {
    paragraphs.querySelectorAll("p")[0].remove();
  }
});
