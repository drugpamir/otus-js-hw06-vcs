import { diff, isWord, pow } from "./task6";

describe("diff function", () => {
  it("returns difference between max and min arguments", () => {
    expect(diff(3, 5)).toBe(2);
    expect(diff(5, 3)).toBe(2);
    expect(diff(6, 6)).toBe(0);
  });
});

describe("isWord function", () => {
  it("returns true if input string contains only word", () => {
    expect(isWord("word")).toBeTruthy();
    expect(isWord("Moscow")).toBeTruthy();
    expect(isWord(" anotherWord   ")).toBeTruthy();
  });

  it("returns false if input string contains several words", () => {
    expect(isWord("two words")).toBeFalsy();
    expect(isWord("Moscow is the capital of Russia")).toBeFalsy();
    expect(isWord(" another Word   ")).toBeFalsy();
  });

  it("returns false if input string doesn't contain any word", () => {
    expect(isWord("")).toBeFalsy();
    expect(isWord("  ")).toBeFalsy();
  });
});

describe("pow function returns exponentation result", () => {
  it("returns a ** x", () => {
    expect(pow(1, 5)).toBe(1);
    expect(pow(3, 2)).toBe(9);
    expect(pow(5, 3)).toBe(125);
  });
});
