import {
  getDayOfWeek,
  printDayOfWeek,
  getDateFromStringRU,
  printDateStringRU,
  calcMinutesAfterMidnight,
  getLatestDateIndex,
} from "./task8";

describe("task8 function", () => {
  it("getDayOfWeek returns day of week full name for Date object", () => {
    expect(getDayOfWeek(new Date(2024, 8, 6))).toBe("пятница");
    expect(getDayOfWeek(new Date(2024, 8, 7))).toBe("суббота");
    expect(getDayOfWeek(new Date(2024, 8, 8))).toBe("воскресенье");
  });

  it("printDayOfWeek returns day of week full name from user text input dd.MM.YYYY", () => {
    jest.spyOn(window, "prompt").mockReturnValue("06.09.2024");
    expect(printDayOfWeek()).toBe("пятница");

    jest.spyOn(window, "prompt").mockReturnValue("07.09.2024");
    expect(printDayOfWeek()).toBe("суббота");

    jest.spyOn(window, "prompt").mockReturnValue("08.09.2024");
    expect(printDayOfWeek()).toBe("воскресенье");
  });

  it("printDayOfWeek returns error message if user text input format is not dd.MM.YYYY", () => {
    jest.spyOn(window, "prompt").mockReturnValue("06/09/2024");
    expect(printDayOfWeek()).toEqual(expect.stringContaining("Ошибка"));
    expect(printDayOfWeek()).toEqual(expect.not.stringContaining("пятница"));

    jest.spyOn(window, "prompt").mockReturnValue("07092024");
    expect(printDayOfWeek()).toEqual(expect.stringContaining("Ошибка"));
    expect(printDayOfWeek()).toEqual(expect.not.stringContaining("суббота"));

    jest.spyOn(window, "prompt").mockReturnValue("77.09.2024");
    expect(printDayOfWeek()).toEqual(expect.stringContaining("Ошибка"));
    expect(printDayOfWeek()).toEqual(
      expect.not.stringContaining("воскресенье")
    );
  });

  it("getDateFromStringRU returns Date from string ", () => {
    expect(getDateFromStringRU("10.09.2020")).toEqual(new Date(2020, 8, 10));
  });

  it("printDateStringRU returns date in string format 'DD.MM.YYYY'", () => {
    expect(printDateStringRU(new Date(2020, 8, 10))).toBe("10.09.2020");
    expect(printDateStringRU(new Date(2020, 0, 2))).toBe("02.01.2020");
  });

  it("getTotalMinutesAfterMidnight returns total count of minutes left after midnight", () => {
    expect(calcMinutesAfterMidnight(new Date(2024, 8, 6, 0, 0, 0))).toBe(0);
    expect(calcMinutesAfterMidnight(new Date(2024, 8, 6, 0, 10, 0))).toBe(10);
    expect(calcMinutesAfterMidnight(new Date(2024, 8, 6, 1, 0, 0))).toBe(60);

    expect(calcMinutesAfterMidnight(new Date(2024, 8, 6, 0, 0, 6))).toBe(0.1);
    expect(calcMinutesAfterMidnight(new Date(2024, 8, 6, 0, 0, 30))).toBe(0.5);
    expect(calcMinutesAfterMidnight(new Date(2024, 8, 6, 3, 3, 3))).toBe(
      183.05
    );
  });

  it("getLatestDateIndex returns index of youngest date element", () => {
    expect(getLatestDateIndex("23.05.2024", "12.06.2024")).toBe(1);
    expect(getLatestDateIndex("23.05.2024", "12.06.2024", "15.08.2025")).toBe(
      2
    );
    expect(getLatestDateIndex("12.03.2026", "01.06.2024", "15.08.2025")).toBe(
      0
    );
    expect(getLatestDateIndex("12.03.2026")).toBe(0);
  });

  it("getLatestDateIndex returns 0 if array length = 1", () => {
    expect(getLatestDateIndex("12.03.2026")).toBe(0);
  });

  it("getLatestDateIndex returns -1 if array length = 0", () => {
    expect(getLatestDateIndex()).toBe(-1);
  });
});
