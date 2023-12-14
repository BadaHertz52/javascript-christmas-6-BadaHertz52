import freezeObject from './freezeObject.js';
/**
 * @param {string} name
 * @param {'appetizer'|'main'|'dessert'|'beverage'} type
 * @param {number} price
 *  @returns {Readonly<[ string ,{name: string,type: 'appetizer'|'main'|'dessert'|'beverage', price:number}]>}
 */
export const makeMenuItem = (name, type, price) =>
  freezeObject([
    name,
    {
      name: name,
      type: type,
      price: price,
    },
  ]);
