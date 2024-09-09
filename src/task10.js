const dateRuPattern =
  /^(0?[1-9]|[1-2][0-9]|3[0-1])[.\-/](0[1-9]|1[0-2])[.\-/](\d{2}|[1-2]\d{3})$/;
const emailFormat = /^\w{2,}@[a-z.]+\.[a-z]{2,}$/;
const phoneFormat = /^\+([ -]?\d){11}$|^[^-]([ -]?\d){10}$/;

/**
 * Проверяет строку на соответствие формату даты в последовательности: день, месяц, год
 * @param {string} input - Входная строка для проверки
 * @returns {boolean} - True в случае соответствия формату даты
 */
export const isDateRuFormat = (input) => dateRuPattern.test(input.trim());

/**
 * Проверяет строку на соответствие формату электронной почты
 * @param {string} input - Входная строка для проверки
 * @returns {boolean} - True в случае соответствия формату электронной почты
 */
export const isEMailFormat = (input) => emailFormat.test(input.trim());

/**
 * Проверяет строку на соответствие формату телефонного номера
 * @param {string} input - Входная строка для проверки
 * @returns {boolean} - True в случае соответствия формату телефонного номера
 */
export const isPhoneFormat = (input) => phoneFormat.test(input.trim());
