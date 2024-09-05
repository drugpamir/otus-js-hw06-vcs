import { getMaxValue, getMonthName, printMonthName, canInclude } from "./task2";

describe("getMaxValue function", () => {
  it("returns max value among arguments", () => {
    expect(getMaxValue(2, 3)).toBe(3);
    expect(getMaxValue(4, 3)).toBe(4);
    expect(getMaxValue(-1, -2)).toBe(-1);
  });
});

describe("monthName functions", () => {
  it("returns month name for numbers 1...12", () => {
    expect(getMonthName(1)).toBe("январь");
    expect(getMonthName(12)).toBe("декабрь");
  });

  it("returns undefined for other numbers", () => {
    expect(getMonthName(0)).toBe(undefined);
    expect(getMonthName(13)).toBe(undefined);
  });

  let originalFunc;
  beforeEach(() => {
    originalFunc = window.prompt;
  });
  afterEach(() => {
    window.prompt = originalFunc;
  });

  it("returns month name for correct user input", () => {
    window.prompt = jest.fn(() => 3);
    expect(printMonthName()).toBe("март");

    window.prompt = jest.fn(() => 4);
    expect(printMonthName()).toBe("апрель");
  });
});

describe("canInclude function", () => {
  it("returns true if square can contain circle", () => {
    expect(canInclude(30, 40)).toBe(true);
    expect(canInclude(40, 40)).toBe(false);
  });
});
