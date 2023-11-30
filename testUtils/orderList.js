import { OrderedMenu } from '../src/models';

const getOrderList = (array) => array.map((v) => new OrderedMenu(v).getData());

export { getOrderList };
