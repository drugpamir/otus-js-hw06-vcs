/** 1.В переменных a и b хранятся числа.
 * Написать программу, которая выводит в консоль
 * произведение и сумму этих чисел.
 * @param {number} a - первое число
 * @param {number} b - второе число
 * @returns {string} Строка с произведением и суммой введённых чисел
 */
export const calcSumAndMult = (a, b) => `a * b = ${a * b}\na + b = ${a + b}`;
console.log(calcSumAndMult(3, 4));

/** 2.В двух переменных хранятся строки символов.
 * Написать программу, которая выведет в консоль
 * суммарное количество символов в обоих строках.
 * @param {string} s1 - Строка 1
 * @param {string} s2 - Строка 2
 * @returns {number} Суммарная длина строк
 */
export const getTotalLength = (s1, s2) => s1.length + s2.length;
console.log("строка", "ещё строка");

/** 3.*Написать программу, которая запрашивает у
 * пользователя ввод трёхзначного числа, а потом
 * выводит в консоль сумму цифр введённого числа.
 * @param {string} input - строковое значение числа
 * @returns Сумма чисел (если введено трёхзначное число), либо 0 (если не трёзначное), либо -1 (если не число)
 */
export function sumOfDigitsForUserInput() {
  const input = prompt("Введите трёхзначное число").trim();
  return sumOfDigits(input);
}

/** Подсчёт суммы чисел трёхзначного числа, введённого пользователем
 * @param {string} input - строковое значение числа
 * @returns Сумма чисел (если введено трёхзначное число), либо 0 (если не трёзначное), либо -1 (если не число)
 */
export function sumOfDigits(input) {
  if (!Number.isFinite(+input)) {
    console.log(`Введено не число (${input})`);
    return -1;
  } else if (input.length != 3) {
    console.log(`Введено не трёхзначное число (${input})`);
    return 0;
  } else {
    const sum = input
      .split("")
      .map((chr) => +chr)
      .reduce((acc, val) => acc + val);
    console.log(sum);
    return sum;
  }
}
