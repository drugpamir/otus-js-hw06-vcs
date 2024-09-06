export const CLS_INPUT_ELM = "pTextInput";
export const CLS_BTN_SUBMIT = "btnSubmit";
export const CLS_P_CONTAINER = "pContainer";
export const P_TAG = "p";

/**
 * Запуск приложения с формой добавления параграфов
 * @param {Element} app
 */
export function runApp(app) {
  app.innerHTML = `
    <input class="${CLS_INPUT_ELM}" autofocus type="text" required placeholder="Новый элемент" />
    <button class="${CLS_BTN_SUBMIT}" hidden type="submit">Добавить параграф</button>
    <div class="${CLS_P_CONTAINER}"></div>
  `;

  // const input = app.querySelector('.' + CLS_INPUT_ELM);
  const input = app.getElementsByClassName(CLS_INPUT_ELM)[0];
  input.addEventListener("input", (ev) => {
    const text = ev.target.value.trim();
    addButton.hidden = text.length === 0;
  });

  const pContainer = app.getElementsByClassName(CLS_P_CONTAINER)[0];

  const addButton = app.getElementsByClassName(CLS_BTN_SUBMIT)[0];
  addButton.addEventListener("click", (ev) => {
    const pText = input.value.trim();
    if (!pText) return;

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
  const p = document.createElement(P_TAG);
  p.innerHTML = pText;
  pContainer.append(p);
  const paragraphs = pContainer.querySelectorAll(P_TAG);
  if (paragraphs.length > 5) {
    paragraphs[0].remove();
  }
}
