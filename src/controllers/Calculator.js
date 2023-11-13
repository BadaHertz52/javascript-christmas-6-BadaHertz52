class Calculator {
  /**
   *
   * @param {{ food:string, type:string, price:number, numberOfOrder:number}[]} order : ;
   */
  calculateAmountBeforeDiscount(order) {
    return order.reduce((accumulator, currentValue) => {
      const { price, numberOfOrder } = currentValue;
      return accumulator + price * numberOfOrder;
    }, 0);
  }
  /**
   *
   * @param {{ event: string, discount: number|string }[]} benefits
   */
  calculateTotalBenefitAmount(benefits) {
    return benefits.reduce(
      (accumulator, currentValue) => accumulator + currentValue.discount,
      0,
    );
  }
  calculateAmountAfterDiscount(amountBeforeDiscount, totalBenefitAmount) {
    return amountBeforeDiscount - totalBenefitAmount;
  }
}

export default Calculator;
