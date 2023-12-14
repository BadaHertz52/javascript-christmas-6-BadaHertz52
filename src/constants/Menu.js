import { freezeObject, makeMenuItem } from '../utils/index.js';

const MENU = freezeObject(
  new Map([
    makeMenuItem('양송이수프', 'appetizer', 6000),
    makeMenuItem('타파스', 'appetizer', 5500),
    makeMenuItem('시저샐러드', 'appetizer', 8000),

    makeMenuItem('티본스테이크', 'main', 55000),
    makeMenuItem('바비큐립', 'main', 54000),
    makeMenuItem('해산물파스타', 'main', 35000),
    makeMenuItem('크리스마스파스타', 'main', 25000),

    makeMenuItem('초코케이크', 'dessert', 15000),
    makeMenuItem('아이스크림', 'dessert', 5000),

    makeMenuItem('제로콜라', 'beverage', 3000),
    makeMenuItem('레드와인', 'beverage', 60000),
    makeMenuItem('샴페인', 'beverage', 25000),
  ]),
);

export default MENU;
