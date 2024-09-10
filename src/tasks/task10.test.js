import { isDateRuFormat, isEMailFormat, isPhoneFormat } from "./task10";

describe("isDateRuFormat", () => {
  it("returns true for string like day-month-year format", () => {
    expect(isDateRuFormat("22.03.2024")).toBeTruthy();
    expect(isDateRuFormat("12-12-2024")).toBeTruthy();
    expect(isDateRuFormat("03/12/24")).toBeTruthy();
    expect(isDateRuFormat("3.12.2024")).toBeTruthy();
  });

  it("returns false for string not like day-month-year format", () => {
    expect(isDateRuFormat("1.2.2033")).toBeFalsy();
    expect(isDateRuFormat("00.03.2023")).toBeFalsy();
    expect(isDateRuFormat("32.03.2024")).toBeFalsy();
    expect(isDateRuFormat("22.00.2024")).toBeFalsy();
    expect(isDateRuFormat("22.13.2024")).toBeFalsy();
    expect(isDateRuFormat("22.03.3012")).toBeFalsy();
  });

  it("ignores white spaces at the begin or end of input string", () => {
    expect(isDateRuFormat("  22.03.2024  ")).toBeTruthy();
  });
});

describe("isEMailFormat", () => {
  it("returns true for string like email format", () => {
    expect(isEMailFormat("adsd@ya.ru")).toBeTruthy();
    expect(isEMailFormat("sdfdkla_asdj1@test.ru")).toBeTruthy();
    expect(isEMailFormat("sdfdkla_asdj1@ya.com.ru")).toBeTruthy();
  });

  it("returns false for string not like email format", () => {
    expect(isEMailFormat("ads.d@ya.ru")).toBeFalsy();
    expect(isEMailFormat("ads.d@ya1.ru")).toBeFalsy();
    expect(isEMailFormat("asdasdas@ya")).toBeFalsy();
  });

  it("ignores white spaces at the begin or end of input string", () => {
    expect(isEMailFormat("  adsd@ya.ru  ")).toBeTruthy();
  });
});

describe("isPhoneFormat", () => {
  it("returns true for string like phone number format", () => {
    expect(isPhoneFormat("+79038489390")).toBeTruthy();
    expect(isPhoneFormat("79195768391")).toBeTruthy();
    expect(isPhoneFormat("+7 903 848 33 90")).toBeTruthy();
    expect(isPhoneFormat("+7 903-234-56-78")).toBeTruthy();
    expect(isPhoneFormat("+7 495 64 3 34 34")).toBeTruthy();
    expect(isPhoneFormat("+345 023-098-09")).toBeTruthy();
    expect(isPhoneFormat("84953758473")).toBeTruthy();
  });

  it("returns isPhoneFormat for string not like phone number format", () => {
    expect(isPhoneFormat("791957683911")).toBeFalsy();
    expect(isPhoneFormat("7.915.983.90.21")).toBeFalsy();
    expect(isPhoneFormat("-79038489390")).toBeFalsy();
    expect(isPhoneFormat("7902345632")).toBeFalsy();
  });

  it("ignores white spaces at the begin or end of input string", () => {
    expect(isPhoneFormat("  +79038489390  ")).toBeTruthy();
  });
});
