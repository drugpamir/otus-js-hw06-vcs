import {
  printSumOfElements,
  multElements,
  printMaxAndMinElements,
} from "./task5";

describe("task5 functions", () => {
  const array = [2, 4, 1, 6, 1, 5, 3, 7, 2, 5];

  let originalFunc;
  beforeEach(() => {
    originalFunc = console.log;
  });
  afterEach(() => {
    console.log = originalFunc;
  });

  it("printSumOfElements returns sum of elements", () => {
    expect(printSumOfElements(array)).toBe(36);
  });

  it("printSumOfElements writes sum to console", () => {
    console.log = jest.fn();
    const sum = printSumOfElements(array);
    expect(console.log).toHaveBeenCalledWith(sum);
  });

  it("multElements returns new array with multiplied elements", () => {
    expect(multElements(array)).toEqual([4, 8, 2, 12, 2, 10, 6, 14, 4, 10]);
    expect(multElements(array, 3)).toEqual([6, 12, 3, 18, 3, 15, 9, 21, 6, 15]);
  });

  it("printMaxAndMinElements returns array [max, min]", () => {
    console.log = jest.fn();
    const [max, min] = printMaxAndMinElements(array);
    expect(max).toBe(7);
    expect(min).toBe(1);
    expect(console.log).toHaveBeenCalled();
  });
});
