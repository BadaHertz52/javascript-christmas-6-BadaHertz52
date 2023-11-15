import { EVENT_NAMES, GIFT_EVENT } from '../src/constants';
import { EventController, OutputController } from '../src/controllers';
import { GiftEvent } from '../src/models';
import { getLogSpy, getOrderList } from '../testUtils';

describe('증정 이벤트 테스트', () => {
  let logSpy;
  beforeEach(() => {
    logSpy = getLogSpy();
  });
  test('할인 전 총 구매액이 12만원 미만 이면, 증정품 없음 ', () => {
    const AMOUNT_BEFORE_DISCOUNT = 6000;
    const ORDER = '양송이스푸-1';
    const ORDER_LIST = getOrderList([ORDER]);

    const gitEvent = new GiftEvent(AMOUNT_BEFORE_DISCOUNT);

    expect(gitEvent.getGift()).toBeUndefined();

    const eventController = new EventController(
      1,
      ORDER_LIST,
      AMOUNT_BEFORE_DISCOUNT,
    );

    const benefits = eventController.getBenefits();

    OutputController.controlPrintGift(benefits);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('없음'));
  });

  test('할인 전 총 구매액이 12만원 이상이면, 증정품 증정', () => {
    const AMOUNT_BEFORE_DISCOUNT = 142000;
    const MENUS = [
      '티본스테이크-1',
      '바비큐립-1',
      '초코케이크-2',
      '제로콜라-1',
    ];
    const ORDER_LIST = getOrderList(MENUS);

    const gitEvent = new GiftEvent(AMOUNT_BEFORE_DISCOUNT);

    expect(gitEvent.getGift()).toBe(GIFT_EVENT.discount);

    const eventController = new EventController(
      1,
      ORDER_LIST,
      AMOUNT_BEFORE_DISCOUNT,
    );

    const benefits = eventController.getBenefits();
    const discount = benefits.filter(
      (v) => v.event === EVENT_NAMES.giftEvent,
    )[0].discount;
    OutputController.controlPrintGift(benefits);

    expect(discount).toBe(25000);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('샴페인 1개'));
  });
});
