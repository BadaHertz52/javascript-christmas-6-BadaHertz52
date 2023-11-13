class Calculator {
  constructor() {}
  /**
   *
   * @param {{ food:string, type:string, price:number, numberOfOrder:number}[]} order : ;
   */
  getAmountBeforeDiscount(order) {
    return order.reduce((accumulator, currentValue) => {
      const { price, numberOfOrder } = currentValue;
      return accumulator + price * numberOfOrder;
    }, 0);
  }
}

export default Calculator;
