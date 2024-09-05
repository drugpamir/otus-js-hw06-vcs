/**
 * 1.Напишите функцию diff, которая получает в качестве параметров 2 числа
 * и возвращает разницу между наибольшим и наименьшим.
 * @param {number} a - первое число
 * @param {number} b - второе число
 * @returns - разница между большим и меньшим числом
 */
export function diff(a, b) {
  return a > b ? a - b : b - a;
}

/**
 * 2. Напишите функцию isWord, которая принимает на вход текстовую строку.
 * Функция возвращает true, если строка состоит из одного слова и false, если из нескольких
 * @param {string} str
 * @returns {boolean} true в случае единственного слова в строке
 */
export function isWord(str) {
  if (!str.trim()) {
    return false;
  }
  return str.trim().split(" ").length == 1;
}

/**
 * *Напишите функцию pow(a, x), которая вернёт значение числа a, возведённого в степень x
 * @param {number} a - основание
 * @param {number} x - степень
 * @returns {number} - результат возведения в степень
 */
export function pow(a, x) {
  return a ** x;
}
