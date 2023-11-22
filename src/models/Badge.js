import { BADGE_SHAPE, EVENT_THRESHOLD } from '../constants/index.js';

class Badge {
  /**
   * @type undefined|{ name: BadgeName; icon: string };
   * @description type BadgeName = '산타' | '트리' | '별';
   */
  #shape;
  constructor(totalBenefitAmount) {
    this.#isSanta(totalBenefitAmount);
    this.#isTree(totalBenefitAmount);
    this.#isStar(totalBenefitAmount);
  }
  /**
   *
   * @param {"santa"|"tree"|"star"} name
   * @param {number} totalBenefitAmount
   */
  #setShape(shape, totalBenefitAmount) {
    if (totalBenefitAmount >= EVENT_THRESHOLD.badge[shape] && !this.#shape)
      this.#shape = BADGE_SHAPE[shape];
  }
  #isSanta(totalBenefitAmount) {
    this.#setShape('santa', totalBenefitAmount);
  }
  #isTree(totalBenefitAmount) {
    this.#setShape('tree', totalBenefitAmount);
  }
  #isStar(totalBenefitAmount) {
    this.#setShape('star', totalBenefitAmount);
  }
  /**
   * @returns {undefined|{ name: BadgeName; icon: string }}
   * @description type BadgeName = '산타' | '트리' | '별';
   */
  getShape() {
    return this.#shape;
  }
}
export default Badge;
