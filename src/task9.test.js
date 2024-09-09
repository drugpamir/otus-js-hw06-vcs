import {
  DIGITS_ACCURACY,
  isTriangleRight,
  printCircleProperties,
  getCircleLength,
  getCircleArea,
  printQuadratiсEquationSolutions,
  getQuadratiсEquationSolutions,
} from "./task9";

describe("isTriangleRight", () => {
  it("returns true for right triangle sizes (parameters in any sequence)", () => {
    expect(isTriangleRight(3, 4, 5)).toBeTruthy();
    expect(isTriangleRight(5, 4, 3)).toBeTruthy();
    expect(isTriangleRight(4, 5, 3)).toBeTruthy();
  });

  it("returns false for non-right triangle sizes", () => {
    expect(isTriangleRight(3, 4, 6)).toBeFalsy();
    expect(isTriangleRight(4, 4, 4)).toBeFalsy();
  });

  it("returns false if any size <= 0", () => {
    expect(isTriangleRight(0, 0, 0)).toBeFalsy();
    expect(isTriangleRight(-3, -4, -5)).toBeFalsy();
  });
});

describe("circle function", () => {
  it("getCircleLength returns length of circle depends on radius", () => {
    expect(getCircleLength(10).toFixed(DIGITS_ACCURACY)).toBe("62.83");
    expect(getCircleLength(100).toFixed(DIGITS_ACCURACY)).toBe("628.32");
  });

  it("getCircleArea returns area of circle depends on radius", () => {
    expect(getCircleArea(10).toFixed(DIGITS_ACCURACY)).toBe("314.16");
    expect(getCircleArea(100).toFixed(DIGITS_ACCURACY)).toBe("31415.93");
  });

  it("printCircleProperties returns circle length and area depends on radius", () => {
    jest.spyOn(window, "prompt").mockReturnValue("10");
    expect(printCircleProperties()).toEqual(expect.stringContaining("62.83"));
    expect(printCircleProperties()).toEqual(expect.stringContaining("314.16"));
  });
});

describe("quadratic equation solving function", () => {
  it("returns 2 solutions for D > 0", () => {
    expect(getQuadratiсEquationSolutions(1, 5, 6)).toEqual([-3, -2]);
    expect(getQuadratiсEquationSolutions(1, -1, -6)).toEqual([-2, 3]);
  });

  it("returns 1 solution for D = 0", () => {
    expect(getQuadratiсEquationSolutions(1, -2, 1)).toEqual([1]);
    expect(getQuadratiсEquationSolutions(1, -4, 4)).toEqual([2]);
  });

  it("returns empty array for D < 0", () => {
    expect(getQuadratiсEquationSolutions(1, 1, 1)).toEqual([]);
    expect(getQuadratiсEquationSolutions(1, 2, 4)).toEqual([]);
  });

  it("printQuadratiсEquationSolutions returns solutions of quadratic equation", () => {
    jest.spyOn(window, "prompt").mockReturnValue("1 5 6");
    expect(printQuadratiсEquationSolutions()).toEqual(
      expect.stringContaining("-3"),
    );
    expect(printQuadratiсEquationSolutions()).toEqual(
      expect.stringContaining("-2"),
    );
  });
});
