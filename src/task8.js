/**
 * 1.Запросите у пользователя дату в формате ДД.ММ.ГГГГ.
 * Напишите программу, выводящую день недели по введённой дате
 * @returns Название дня недели
 */
export function printDayOfWeek() {
  let errorMessage = "Ошибка. Введён неверный формат даты (ДД.ММ.ГГГГ)";
  const inputText = prompt("Введите дату в формате ДД.ММ.ГГГГ").trim();
  const date = getDateFromStringRU(inputText);
  if (date) {
    return getDayOfWeek(date);
  }
  return errorMessage;
}
/**
 * Возвращает название дня недели по дате
 * @param {Date} date - исходная дата
 * @returns {string} - день недели
 */
export function getDayOfWeek(date) {
  return date.toLocaleDateString("ru-RU", { weekday: "long" });
}

/**
 * Парсит строку вида "ДД.ММ.ГГГГ" в объект даты
 * @param {string} dateRU
 * @returns {Date}
 */
export function getDateFromStringRU(dateRU) {
  const values = dateRU.split(".");
  if (values.length != 3) {
    return undefined;
  }
  const [day, month, year] = values;
  const strDate = `${year}/${month}/${day}`;
  const date = new Date(strDate);
  if (isNaN(date)) {
    return undefined;
  }

  return date;
}
/**
 * Возвращает строковое представление даты в формате ДД.ММ.ГГГГ
 * @param {Date} date - Исходная дата для конвертации в строку
 * @returns {string} - Строка с датой в формате ДД.ММ.ГГГГ
 */
export function printDateStringRU(date) {
  return date.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

/**
 * 2.Написать программу, которая выводит в консоль количество минут,
 * прошедшее с начала сегодняшнего дня.
 */
/**
 * Возвращает суммарное количество минут, прошедшее с полуночи ддя выбранной даты
 * Если дату не передать, то будет применено текущее время
 * @param {Date} dateTime
 * @returns {number} - Количество минут
 */
export function calcMinutesAfterMidnight(dateTime = new Date()) {
  const date = new Date(
    dateTime.getFullYear(),
    dateTime.getMonth(),
    dateTime.getDate(),
  );
  const totalMinutes = (dateTime - date) / 1000 / 60;
  return totalMinutes;
}

/**
 * 3.*В двух переменных хранятся даты рождения двух пользователей в формате ДД.ММ.ГГГГ.
 * Написать программу, которая определяет более молодого пользователя
 */
/**
 * Возвращает индекс элемента с самой поздней датой (формат ДД.ММ.ГГГГ)
 * @param  {...string} dates
 */
export function getLatestDateIndex(...dates) {
  if (dates.length < 1) {
    return -1;
  }
  const ticks = dates.map(getDateFromStringRU).map((date) => date.getTime());
  const latest = Math.max(...ticks);
  return ticks.indexOf(latest);
}
