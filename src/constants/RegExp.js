import { freezeObject } from '../utils/index.js';
import { RESERVATION_PERIOD, SEPARATOR } from './Rule.js';

const REG_EXP = freezeObject({
  reservation: new RegExp(
    `^[${RESERVATION_PERIOD.start}-${RESERVATION_PERIOD.end}]$`,
  ),
  order: new RegExp(`^[가-힣]+${SEPARATOR.hyphen}([1-9]|[1][0-9]|[2][0])$`),
});

export default REG_EXP;
