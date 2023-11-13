import { freezeFood, freezeFoodType, freezeObject } from '../utils/index.js';

const FOOD_TYPE = freezeObject({
  appetizer: 'appetizer',
  main: 'main',
  dessert: 'dessert',

  beverage: 'beverage',
});
const MENUS = freezeObject(
  new Map([
    //애피타이저
    ['양송이스푸', freezeFood('양송이스푸', FOOD_TYPE.appetizer, 6000)],
    ['타파스', freezeFood('타파스', FOOD_TYPE.appetizer, 5500)],
    ['시저샐러드', freezeFood('시저샐러드', FOOD_TYPE.appetizer, 8000)],
    //main
    ['티본스테이크', freezeFood('티본스테이크', FOOD_TYPE.main, 55000)],
    ['바비큐립', freezeFood('바비큐립', FOOD_TYPE.main, 54000)],
    ['해산물파스타', freezeFood('해산물파스타', FOOD_TYPE.main, 35000)],
    ['크리스마스파스타', freezeFood('크리스마스파스타', FOOD_TYPE.main, 25000)],
    //디저트
    ['초코케이크', freezeFood('초코케이크', FOOD_TYPE.dessert, 15000)],
    ['아이스크림', freezeFood('아이스크림', FOOD_TYPE.dessert, 5000)],
    //음료
    ['제로콜라', freezeFood('제로콜라', FOOD_TYPE.beverage, 3000)],
    ['레드와인', freezeFood('레드와인', FOOD_TYPE.beverage, 60000)],
    ['샴페인', freezeFood('샴페인', FOOD_TYPE.beverage, 25000)],
  ]),
);

const getFoods = () => {
  let array = [];
  for (const key of MENUS.keys()) {
    array.push(key);
  }
  return array;
};

const FOOD_ARRAY = freezeObject(getFoods());

export { MENUS, FOOD_ARRAY, FOOD_TYPE };
