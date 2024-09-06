/**
 * Запуск приложения с формой добавления параграфов
 * @param {Element} appEl
 */
export function runApp(appEl) {
  appEl.innerHTML = `
    <input autofocus type="text" required minlength="4" placeholder="Новый элемент" />
    <button class="btnSubmit" type="submit">Добавить параграф</button>
    <div class="pContainer"></div>
  `;

  const input = appEl.querySelector("input");
  input.addEventListener("input", (ev) => {
    addButton.hidden = ev.target.value.length === 0;
  });

  const pContainer = appEl.querySelector(".pContainer");

  const addButton = appEl.querySelector(".btnSubmit");
  addButton.hidden = true;
  addButton.addEventListener("click", (ev) => {
    const pText = input.value;
    input.value = "";
    ev.target.hidden = true;

    addParagraph(pContainer, pText);
  });
}

/**
 * Добавляет параграф в контейнер с заданным текстом
 * @param {Element} pContainer - контейнер, содержащий параграфы
 * @param {string} pText - текст нового параграфа
 */
function addParagraph(pContainer, pText) {
  const p = document.createElement("p");
  p.innerHTML = pText;
  pContainer.append(p);
  const paragraphs = pContainer.querySelectorAll("p");
  if (paragraphs.length > 5) {
    paragraphs[0].remove();
  }
}
