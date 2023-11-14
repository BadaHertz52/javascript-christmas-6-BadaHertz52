import { MissionUtils } from '@woowacourse/mission-utils';
import { SPECIAL_EVENT, THRESHOLD } from '../src/constants';

const getRandomDate = (start, end) =>
  MissionUtils.Random.pickNumberInRange(start, end);

const getRandomReservationDate = () => {
  const { min, max } = THRESHOLD.reservationDate;
  return getRandomDate(min, max);
};
const WEEKEND = [1, 2, 8, 9, 15, 16, 22, 23, 29, 30];

const getRandomItemFromArray = (array) =>
  array[Math.floor(Math.random() * array.length)];

const getRandomWeekend = () => getRandomItemFromArray(WEEKEND);

const getRandomWeekDay = () => {
  let date;
  while (!date) {
    const randomDate = getRandomReservationDate();
    if (!WEEKEND.includes(randomDate)) date = randomDate;
  }
  return date;
};
const getRandomSpecialDate = () => getRandomItemFromArray(SPECIAL_EVENT.dates);

const getRandomDateNotSpecialEvent = () => {
  let date;
  while (!date) {
    const randomDate = getRandomReservationDate();
    if (!SPECIAL_EVENT.dates.includes(randomDate)) date = randomDate;
  }
  return date;
};

export {
  getRandomDate,
  getRandomSpecialDate,
  getRandomDateNotSpecialEvent,
  getRandomWeekDay,
  getRandomWeekend,
  WEEKEND,
};
