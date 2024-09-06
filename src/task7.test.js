import {
  runApp,
  CLS_INPUT_ELM,
  CLS_BTN_SUBMIT,
  CLS_P_CONTAINER,
  P_TAG,
} from "./task7";

describe("Task 7 form", () => {
  let appElm, inputElm, btnSubmit, pContainer;

  beforeEach(() => {
    appElm = document.createElement("div");
    runApp(appElm);
    inputElm = appElm.getElementsByClassName(CLS_INPUT_ELM)[0];
    btnSubmit = appElm.getElementsByClassName(CLS_BTN_SUBMIT)[0];
    pContainer = appElm.getElementsByClassName(CLS_P_CONTAINER)[0];
  });

  const hasInputElm = () => !!inputElm;
  const hasBtnSubmit = () => !!btnSubmit;
  const hasPContainer = () => !!pContainer;

  const isInputElmVisible = () => hasInputElm() && !inputElm.hidden;
  const isBtnSubmitVisible = () => hasBtnSubmit() && !btnSubmit.hidden;

  const setInputText = (text) => {
    inputElm.value = text;
    inputElm.dispatchEvent(new Event("input"));
  };
  const clickSubmitBtn = () => btnSubmit.click();
  const addParagraph = (text) => {
    setInputText(text);
    clickSubmitBtn();
  };

  const getParagraphs = () =>
    [...appElm.querySelectorAll(P_TAG)].map((p) => p.innerHTML);
  const getParagraphsCount = () => getParagraphs().length;

  it("creates and shows initial markup elements", () => {
    expect(hasInputElm()).toBeTruthy();
    expect(hasBtnSubmit()).toBeTruthy();
    expect(hasPContainer()).toBeTruthy();

    expect(isInputElmVisible()).toBeTruthy();
    expect(isBtnSubmitVisible()).toBeFalsy();
  });

  it("shows submit button only if input element contains not blank text", () => {
    setInputText("");
    expect(isBtnSubmitVisible()).toBeFalsy();

    setInputText("   ");
    expect(isBtnSubmitVisible()).toBeFalsy();

    setInputText("123");
    expect(isBtnSubmitVisible()).toBeTruthy();
  });

  it("ignore blank input text if submit button was clicked", () => {
    expect(getParagraphsCount()).toBe(0);

    addParagraph("   ");
    expect(getParagraphsCount()).toBe(0);
  });

  it("adds paragraph by submitting button", () => {
    expect(getParagraphsCount()).toBe(0);

    addParagraph("abc");
    expect(getParagraphsCount()).toBe(1);

    addParagraph("de fg");
    expect(getParagraphsCount()).toBe(2);
  });

  it("allow add not more than 5 paragraphs", () => {
    expect(getParagraphs()).toEqual([]);

    const initArrayToFill = ["11", "22", "33", "44", "55"];
    initArrayToFill.forEach(addParagraph);
    expect(getParagraphs()).toEqual(["11", "22", "33", "44", "55"]);

    addParagraph("66");
    expect(getParagraphs()).toEqual(["22", "33", "44", "55", "66"]);
  });
});
