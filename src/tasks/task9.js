export const DIGITS_ACCURACY = 2;

/**
 * 1.Даны длины трёх сторон треугольника. Определить, является ли треугольник прямоугольным
 * Проверяется по теореме Пифагора
 * @param {number} a - первая сторона треугольника
 * @param {number} b - вторая сторона треугольника
 * @param {number} c - третья сторона треугольника
 * @returns {boolean} True в случае прямоугольного треугольника
 */
export function isTriangleRight(a, b, c) {
  const sides = [a, b, c];
  if (sides.some((val) => val <= 0)) {
    return false;
  }
  const hypotenuse = Math.max(...sides);
  const catetus = sides.filter((val) => val != hypotenuse);
  return hypotenuse ** 2 === catetus.reduce((acc, val) => acc + val ** 2, 0);
}

/**
 * 2.Пользователь вводит число R. Написать программу, которая выведет
 * в консоль длину окружности и площадь круга с радиусом R
 * @returns
 */
export function printCircleProperties() {
  const inputText = prompt("Введите радиус окружности", "10");
  const radius = +inputText;
  let resultMessage;
  if (Number.isFinite(radius)) {
    resultMessage = `${getCircleLength(radius).toFixed(DIGITS_ACCURACY)} ${getCircleArea(radius).toFixed(DIGITS_ACCURACY)}`;
  } else {
    resultMessage = "Ошибка. Радиус должен быть числом. Введено: " + inputText;
  }
  console.log(resultMessage);
  return resultMessage;
}
/**
 * Возвращает длину окружности, вычисленную из радиуса
 * @param {number} radius - радиус окружности
 * @returns {number} - Длина окружнсоти
 */
export const getCircleLength = (radius) => 2 * Math.PI * radius;
/**
 * Возвращает площадь окружности, вычисленную из радиуса
 * @param {number} radius - радиус окружности
 * @returns {number} - Площадь окружнсоти
 */
export const getCircleArea = (radius) => Math.PI * radius ** 2;

/**
 * Пользователь вводит числа a, b и c. Написать программу,
 * выводящую корни квадратного уравнения с коэффициентами a, b и c.
 */
export function printQuadratiсEquationSolutions() {
  const inputText = prompt(
    "Введите коэффициенты а, b и с квадратного уравнения через пробел или запятую",
    "1, -2, 1"
  );
  let resultMessage;
  const coeffs = inputText.split(/[\s,;]/);
  const [a, b, c] = coeffs;
  if (coeffs.length != 3) {
    resultMessage =
      "Ошибка. Необходимо ввести 3 числа, разделённые пробелом или запятой";
  } else {
    const solutions = getQuadratiсEquationSolutions(...coeffs);
    const equation = `${a == 1}x + ${b}x + ${c} = 0`;
    if (solutions.length == 0) {
      resultMessage = `Квадратное уравнение ${equation} не имеет вещественных корней`;
    } else if (solutions.length == 1) {
      resultMessage = `Корень квадратного уравнения ${equation}: ${solutions}`;
    } else {
      resultMessage = `Корни квадратного уравнения ${equation}: ${solutions}`;
    }
  }
  console.log(resultMessage);
  return resultMessage;
}

/**
 * Возвращает массив корней квадратного уравнения по его конффициентам
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {Array}
 */
export function getQuadratiсEquationSolutions(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    return [-b / 2 / a];
  } else
    return [
      (-b - Math.sqrt(discriminant)) / 2 / a,
      (-b + Math.sqrt(discriminant)) / 2 / a,
    ];
}
