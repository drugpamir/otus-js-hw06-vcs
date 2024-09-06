/**
 * 1.Запросите у пользователя дату в формате ДД.ММ.ГГГГ.
 * Напишите программу, выводящую день недели по введённой дате
 * @returns Название дня недели
 */
export function printDayOfWeek() {
  let errorMessage = "Введён неверный формат даты (ДД.ММ.ГГГГ)";
  const inputText = prompt("Введите дату в формате ДД.ММ.ГГГГ").trim();
  const values = inputText.split(".");
  if (values.length != 3) {
    return errorMessage;
  }

  const [day, month, year] = values;
  const strDate = `${year}/${month}/${day}`;
  const date = new Date(strDate);
  if (isNaN(date)) {
    return errorMessage;
  }

  return getDayOfWeek(date);
}
/**
 * Возвращает название дня недели по дате
 * @param {Date} date - исходная дата
 * @returns {string} - день недели
 */
export function getDayOfWeek(date) {
  return date.toLocaleDateString("ru-RU", { weekday: "long" });
}
