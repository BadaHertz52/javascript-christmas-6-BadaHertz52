import { freezeFood, freezeFoodType, freezeObject } from '../utils/index.js';

const FOOD_TYPE = freezeObject({
  appetizer: freezeFoodType('애피타이저', 'appetizer'),
  main: freezeFoodType('메인', 'main'),
  dessert: freezeFoodType('디저트', 'dessert'),

  beverage: freezeFoodType('음료', 'beverage'),
});

const MENUS = freezeObject(
  new Map([
    //애피타이저
    [
      '양송이스푸',
      freezeFood({
        food: '양송이스푸',
        type: FOOD_TYPE.appetizer,
        price: 6000,
      }),
    ],
    [
      '타파스',
      freezeFood({
        food: '타파스',
        type: FOOD_TYPE.appetizer,
        price: 5500,
      }),
    ],
    [
      '시저샐러드',
      freezeFood({
        food: '시저샐러드',
        type: FOOD_TYPE.appetizer,
        price: 8000,
      }),
    ],
    //main
    [
      '티본스테이크',
      freezeFood({
        food: '티본스테이크',
        type: FOOD_TYPE.main,
        price: 55000,
      }),
    ],
    [
      '바비큐립',
      freezeFood({
        food: '바비큐립',
        type: FOOD_TYPE.main,
        price: 54000,
      }),
    ],
    [
      '해산물파스타',
      freezeFood({
        food: '해산물파스타',
        type: FOOD_TYPE.main,
        price: 35000,
      }),
    ],
    [
      '크리스마스파스타',
      freezeFood({
        food: '크리스마스파스타',
        type: FOOD_TYPE.main,
        price: 25000,
      }),
    ],
    //디저트
    [
      '초코케이크',
      freezeFood({
        food: '초코케이크',
        type: FOOD_TYPE.dessert,
        price: 15000,
      }),
    ],
    [
      '아이스크림',
      freezeFood({
        food: '아이스크림',
        type: FOOD_TYPE.dessert,
        price: 5000,
      }),
    ],
    //음료
    [
      '제로콜라',
      freezeFood({
        food: '제로콜라',
        type: FOOD_TYPE.beverage,
        price: 3000,
      }),
    ],
    [
      '레드와인',
      freezeFood({
        food: '레드와인',
        type: FOOD_TYPE.beverage,
        price: 60000,
      }),
    ],
    [
      '샴페인',
      freezeFood({
        food: '샴페인',
        type: FOOD_TYPE.beverage,
        price: 25000,
      }),
    ],
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
