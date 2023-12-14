import { NONE, BADGE } from '../constants/index.js';

class Badge {
  #badge = NONE;
  /**
   * @param {number} totalBenefits
   */
  constructor(totalBenefits) {
    this.#setBadge(totalBenefits);
  }
  #setBadge(totalBenefits) {
    const { star, tree, santa } = BADGE;
    if (totalBenefits >= star.amount) this.#badge = star.shape;
    if (totalBenefits >= tree.amount) this.#badge = tree.shape;
    if (totalBenefits >= santa.amount) this.#badge = santa.shape;
  }
  getBadge() {
    return this.#badge;
  }
}

export default Badge;
