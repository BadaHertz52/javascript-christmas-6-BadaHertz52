import { InputController } from '../src/controllers';
import { ReservationDate } from '../src/models';
import { getReservationDateErrorMessage } from '../src/utils';
import {
  getLogSpy,
  getRandomReservationDate,
  mockQuestions,
} from '../testUtils';

describe('예액 빙문일에 대한 테스트', () => {
  const ERROR_MESSAGE = getReservationDateErrorMessage();

  test('방문일이 1~31의 숫자가 아니면 예외가 발생한다.', () => {
    const WRONG_DATE = ['33', '', 'one'];

    WRONG_DATE.forEach((v) => {
      expect(() => new ReservationDate(v)).toThrow(ERROR_MESSAGE);
    });
  });

  test('유효하지 않은 예약 방문일을 입력하면, 예외 문구 출력 후 유효한 입력값을 받을 때까지 입력값을 다시 받는다.', async () => {
    const WRONG_DATE = ['33', '', 'one'];
    const CORRECT_DATE = getRandomReservationDate().toString();
    const INPUT_ARRAY = [...WRONG_DATE, CORRECT_DATE];

    const logSpy = getLogSpy();

    mockQuestions(INPUT_ARRAY);

    await InputController.getValidReservationDate();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(ERROR_MESSAGE));
  });

  test('유효한 예약 방문일을 일력시, 예약 방문일을 반환한다.', async () => {
    const DATE = getRandomReservationDate();

    mockQuestions([DATE.toString()]);

    const reservationDate = await InputController.getValidReservationDate();

    expect(reservationDate).toEqual(DATE);
  });
});
