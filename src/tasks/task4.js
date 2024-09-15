/**
 * 1.Запросить у пользователя ввод числа. Записать
 * введенное значение в поле age объекта user.
 * @param {object} user - Объект пользователя
 * @param {number} age - Новый возраст
 * @returns {object} - Объект пользователя
 */
export function setAge(user, age) {
  user.age = age;
  return user;
}

/**
 * 2.Создать копию объекта user с именем admin.
 * Добавить новому объекту поле role со значением ‘admin’.
 * @param {object} user - Объект пользователя
 * @returns {object} - Объект администатора
 */
export function cloneToAdmin(user) {
  return Object.assign({ role: "admin" }, user);
}

/**
 * *Записать все значения полей объекта admin в отдельные переменные.
 * Имена переменных должны совпадать с названиями полей.
 * @param {object} user - Объект пользователя
 * @returns {Array} - Массив значений полей объекта
 */
export function getFields(user) {
  const { name, age, role } = user;
  return [name, age, role];
}
