/** 1.В переменных a и b хранятся числа. Вывести в консоль наибольшее из них.
 * @param {number} a - первое число
 * @param {number} b - второе число
 * @returns {number} - наибольшее из чисел
 */
export const getMaxValue = (a, b) => Math.max(a, b);

/** 2.Запросить у пользователя ввод числа от 1 до 12.
 * Вывести в консоль название месяца, соответствующее
 * этому числу (1 — январь, 2 — февраль и т.д.).
 */
export function printMonthName(locale = "ru-RU") {
  const month = +prompt("Введите число от 1 до 12 (номер месяца)");
  let monthName;
  if (!Number.isFinite(month)) {
    console.log(`Необходимо ввести число. Введено: ${month}`);
  } else if (month < 1 || month > 12) {
    console.log(`Число должно быть от 1 до 12. Введено: ${month}`);
  } else {
    monthName = getMonthName(month, locale);
    console.log(monthName);
  }
  return monthName;
}
/**
 * Возвращает название месяца по его номеру в году
 * @param {number} month - номер месяца в году (от 1 до 12)
 * @param {string} locale - локализация
 * @returns - название месяца
 */
export function getMonthName(month, locale = "ru-RU") {
  if (month < 1 || month > 12) {
    return undefined;
  }
  const date = new Date(2024, month - 1, 1);
  return date.toLocaleString(locale, { month: "long" });
}

/** 3.*В переменных circle и square хранятся площади круга
 * и квадрата соответственно. Написать программу,
 * которая определяет, поместится ли круг в квадрат.
 * @param {number} circleRadius - радиус окружности
 * @param {number} squareWidth - сторона квадрата
 * @returns {boolean} - True в случае, если круг поместится в квадрат
 */
export function canInclude(circleRadius, squareWidth) {
  const diameter = Math.sqrt((4 * circleRadius) / Math.PI);
  const side = Math.sqrt(squareWidth);

  const canInclude = side >= diameter;
  const canIncludeText = canInclude ? "" : "не ";
  const size1 = diameter.toFixed(1);
  const size2 = side.toFixed(1);
  console.log(
    `Круг (d=${size1}) ${canIncludeText}поместится в квадрат (a=${size2})`,
  );
  return canInclude;
}
