import {
  calcSumAndMult,
  getTotalLength,
  sumOfDigits,
  sumOfDigitsForUserInput,
} from "./task1";

describe("calcSumAndMult function", () => {
  it("returns string with sum and mult for 2 numbers", () => {
    expect(calcSumAndMult(2, 3)).toBe("a * b = 6\na + b = 5");
  });
});

describe("getTotalLength function", () => {
  it("returns 22 for arguments 'some string' and 'another one'", () => {
    expect(getTotalLength("some string", "another one")).toBe(22);
  });
});

describe("sumOfDigit function", () => {
  it("returns sum of digits for a three-digit number", () => {
    expect(sumOfDigits("123")).toBe(6);
    expect(sumOfDigits("654")).toBe(15);
  });

  it("returns -1 if input value is not a number", () => {
    expect(sumOfDigits("1abc")).toBe(-1);
  });

  it("returns 0 if input value is not a three-digit number", () => {
    expect(sumOfDigits("12")).toBe(0);
  });

  let originalFunc;
  beforeEach(() => {
    originalFunc = window.prompt;
  });
  afterEach(() => {
    window.prompt = originalFunc;
  });

  it("returns sum of digits for correct user input", () => {
    // jest.spyOn(window, "prompt").mockReturnValue("345");
    window.prompt = jest.fn(() => "345");
    expect(sumOfDigitsForUserInput()).toBe(12);
  });
});
