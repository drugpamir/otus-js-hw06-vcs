import { sumOfNumbersInInterval, printMultOperation, avg } from "./task3";

describe("task3 module", () => {
  it("sum of numbers in range 1...10 equals 55", () => {
    expect(sumOfNumbersInInterval(1, 10)).toBe(55);
    expect(sumOfNumbersInInterval(1, 11)).toBe(66);
  });

  it("print mult operations", () => {
    const lines = [
      "7 x 1 = 7",
      "7 x 2 = 14",
      "7 x 3 = 21",
      "7 x 4 = 28",
      "7 x 5 = 35",
      "7 x 6 = 42",
      "7 x 7 = 49",
      "7 x 8 = 56",
      "7 x 9 = 63",
    ];
    expect(printMultOperation(7)).toBe(lines.join("\n"));
  });

  it("average of numbers in range 1...3", () => {
    expect(avg(2)).toBe(1.5);
    expect(avg(3)).toBe(2);
    expect(avg(4)).toBe(2.5);
    expect(avg(6)).toBe(3.5);
  });
});
