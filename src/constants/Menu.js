export const MENU = Object.freeze(
  new Map([
    ['양송이수프', { name: '양송이수프', type: 'appetizer', price: 6000 }],
    ['타파스', { name: '타파스', type: 'appetizer', price: 5500 }],
    ['시저샐러드', { name: '시저샐러드', type: 'appetizer', price: 8000 }],
    ['티본스테이크', { name: '티본스테이크', type: 'main', price: 55000 }],
    ['바비큐립', { name: '바비큐립', type: 'main', price: 54000 }],
    ['해산물파스타', { name: '해산물파스타', type: 'main', price: 35000 }],
    [
      '크리스마스파스타',
      { name: '크리스마스파스타', type: 'main', price: 25000 },
    ],
    ['초코케이크', { name: '초코케이크', type: 'dessert', price: 15000 }],
    ['아이스크림', { name: '아이스크림', type: 'dessert', price: 5000 }],
    ['제로콜라', { name: '제로콜라', type: 'beverage', price: 3000 }],
    ['레드와인', { name: '레드와인', type: 'beverage', price: 60000 }],
    ['샴페인', { name: '샴페인', type: 'beverage', price: 25000 }],
  ]),
);

export const FOODS = [...MENU.keys()];

export const BEVERAGE = FOODS.filter((v) => MENU.get(v).type === 'beverage');
