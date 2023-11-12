/**
 *
 * @param {Object} object
 * @returns Object.freeze(object)
 */
const freezeObject = (object) => Object.freeze(object);

/**
 * 메뉴의 종류를 한국어,영어로 저장
 * @param {string} kor
 * @param {string} eng
 * @returns Object.freeze({kor:kor, eng:eng})
 */
const freezeFoodType = (kor, eng) => freezeObject({ kor: kor, eng: eng });

/**
 * @param{string} food : 음식명
 * @param {"appetizer"|"main"|"dessert"|"beverage"} type : 음식 종류
 * @param {number} price
 * @returns Object.freeze({food:food, type: type, price: price })
 */
const freezeFood = (food, type, price) =>
  freezeObject({ food: food, type: type, price: price });

export { freezeObject, freezeFood, freezeFoodType };
