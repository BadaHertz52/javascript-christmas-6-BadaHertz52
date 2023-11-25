/**
 * @param {Object} object
 * @returns {Object} Object.freeze(Object)
 */
const freezeObject = (object) => Object.freeze(object);

/**
 * @param {FoodName} food : 음식명
 * @param {"appetizer"|"main"|"dessert"|"beverage"} type : 음식 종류
 * @param {number} price
 * @returns {{food:food, type: type, price: price }} Object.freeze({food:food, type: type, price: price })
 */
const freezeFood = (food, type, price) =>
  freezeObject({ food: food, type: type, price: price });

export { freezeObject, freezeFood };
