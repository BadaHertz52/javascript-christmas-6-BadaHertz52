import { MissionUtils } from '@woowacourse/mission-utils';
import { Reservation } from '../src/model/index.js';
import { getErrorMessage } from '../src/utils/Error.js';

describe('예약방문일 테스트', () => {
  test('유효하지 않는 방문일일 경우 오류 발생', () => {
    const WRONG_DATES = ['0', '', '32', '하루', 'ONE'];

    WRONG_DATES.forEach((date) => {
      expect(() => new Reservation(date)).toThrow(
        getErrorMessage('reservation'),
      );
    });
  });
  test('유효한 방문일일 경우, 해당 방문일을 반환', () => {
    const date = MissionUtils.Random.pickNumberInRange(1, 31);
    expect(new Reservation(date.toString()).getState()).toEqual({
      month: 12,
      date: date,
    });
  });
});
