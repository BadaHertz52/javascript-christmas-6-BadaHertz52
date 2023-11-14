import { GIFT_EVENT } from '../src/constants';
import { EventController, OutputController } from '../src/controllers';
import { GiftEvent, OrderedMenu } from '../src/models';
import { getLogSpy } from '../testUtils';

describe('증정 이벤트 테스트', () => {
  test('할인 전 총 구매액이 12만원 미만 이면, 증정품 없음 ', () => {
    const AMOUNT_BEFORE_DISCOUNT = 6000;
    const ORDER = '양송이스푸-1';
    const order = new OrderedMenu(ORDER).getData();
    const logSpy = getLogSpy();

    const gitEvent = new GiftEvent(AMOUNT_BEFORE_DISCOUNT);

    expect(gitEvent.getGift()).toBeUndefined();

    const eventController = new EventController(
      1,
      order,
      AMOUNT_BEFORE_DISCOUNT,
    );

    const benefit = eventController.getBenefits();

    OutputController.controlPrintGift(benefit);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('없음'));
  });

  test('할인 전 총 구매액이 12만원 이상이면, 증정품 증정', () => {
    const AMOUNT_BEFORE_DISCOUNT = 142000;
    const ORDERS = [
      '티본스테이크-1',
      '바비큐립-1',
      '초코케이크-2',
      '제로콜라-1',
    ];
    const order = ORDERS.map((v) => new OrderedMenu(v).getData());
    const logSpy = getLogSpy();

    const gitEvent = new GiftEvent(AMOUNT_BEFORE_DISCOUNT);

    expect(gitEvent.getGift()).toBe(GIFT_EVENT.discount);

    const eventController = new EventController(
      1,
      order,
      AMOUNT_BEFORE_DISCOUNT,
    );

    const benefit = eventController.getBenefits();

    OutputController.controlPrintGift(benefit);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('샴페인 1개'));
  });
});
