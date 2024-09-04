/** 1.Вывести в консоль сумму всех целых чисел от 50 до 100. */
export function sumOfNumbersInInterval(from, to) {
  let sum = 0;
  for (let i = from; i <= to; i++) {
    sum += i;
  }
  return sum;
}

/** 2.Вывести в консоль таблицу умножения на 7.
 * @param {number} a - Число, для которого выводится таблица умножения
 */
export function printMultOperation(a = 7) {
  const multipliers = Array.from({ length: 9 }, (value, index) => index + 1);
  return multipliers.map((val) => `${a} x ${val} = ${a * val}`).join('\n');
}

/** *Запросить у пользователя ввод числа N. Вывести в консоль среднее арифметическое всех нечётных чисел от 1 до N
 * @param {number} n - Число
 */
export function avg(n) {
  const numbers = Array.from({ length: n }, (value, index) => index + 1);
  return numbers.reduce((acc, num) => acc + num, 0) / n;
}
