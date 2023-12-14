/**
 * @param {object} object
 * @returns  {Readonly<object>}
 */
const freezeObject = (object) => Object.freeze(object);

export default freezeObject;
