import App from "../src/App.js";

import { mockQuestions, getLogSpy, getOutput, expectLogContains ,LINE_SEPARATOR } from '../testUtils'

describe("기능 테스트", () => {
  test("모든 타이틀 출력", async () => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(["3", "티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1"]);

    // when
    const app = new App();
    await app.run();

    // then
    const expected = [
      "<주문 메뉴>",
      "<할인 전 총주문 금액>",
      "<증정 메뉴>",
      "<혜택 내역>",
      "<총혜택 금액>",
      "<할인 후 예상 결제 금액>",
      "<12월 이벤트 배지>",
    ];

    expectLogContains(getOutput(logSpy), expected);
  });

  test("혜택 내역 타이틀과 없음 출력", async () => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(["26", "타파스-1,제로콜라-1"]);

    // when
    const app = new App();
    await app.run();

    // then
    const expected = ["<혜택 내역>" + LINE_SEPARATOR + "없음"];

    expectLogContains(getOutput(logSpy), expected);
  });
});

describe("예외 테스트", () => {
  test("날짜 예외 테스트", async () => {
    // given
    const INVALID_DATE_MESSAGE = "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.";
    const INPUTS_TO_END = ["1", "해산물파스타-2"];
    const logSpy = getLogSpy();
    mockQuestions(["a","0","31"," ", , ...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_DATE_MESSAGE));
  });

  test("주문 예외 테스트", async () => {
    // given
    const INVALID_ORDER_MESSAGE = "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.";
    const INPUTS_TO_END = ["해산물파스타-2"];
    const logSpy = getLogSpy();
    mockQuestions(["3", "제로콜라-a", ...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_ORDER_MESSAGE));
  });
});
