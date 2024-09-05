/**
 * 1. Выведите в консоль сумму всех элементов массива
 * @param {Array} array - Исходный массив
 * @returns {number} Сумма элементов массива
 */
export function printSumOfElements(array) {
  const sumOfElements = array.reduce((acc, val) => acc + val);
  console.log(sumOfElements);
  return sumOfElements;
}

/**
 * 2.Создайте новый массив на основе исходного, в котором каждый элемент
 * будет в multiplier раз (по умолчанию в 2 раза) больше элемента исходного массива с таким же индексом
 * @param {Array} array - исходный массив
 * @param {number} multiplier - множитель
 * @returns {Array} - новый массив, в котором элементы вдвое больше, чем на тех же позициях в исходном массиве
 */
export function multElements(array, multiplier = 2) {
  return array.map((val) => (val *= multiplier));
}

/**
 * 3.*Найдите и выведите в консоль наибольший и наименьший элементы исходного массива
 * @param {Array} array - исходный массив
 * @returns {Array} - массив из 2-х элементов (максимальное и минимальное значение)
 */
export function printMaxAndMinElements(array) {
  const max = Math.max(...array);
  const min = Math.min(...array);
  console.log(`Макс. элемент = ${max}, мин. элемент = ${min}`);
  return [max, min];
}
