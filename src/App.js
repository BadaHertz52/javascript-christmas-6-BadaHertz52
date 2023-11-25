import {
  CalculatorController,
  EventController,
  OutputController,
  ReservationController,
} from './controllers/index.js';
import {Badge} from './models/index.js';

import { OutputView } from './views/index.js';

class App {
  /**
   * @type {{date:number|undefined; order:Order}}

   * @description type FoodName ="양송이스푸"|"타파스"|....|"샴페인"; 
  * type Order ={ food:FoodName; type:'appetizer'|'main'|'dessert'|'beverage'; price:number; numberOfOrder:number}[]
   */
  #reservation = {
    date: undefined,
    order: undefined,
  };

  /**
   * @type {undefined|Benefits};
   * @description  type Benefits ={ event:   | '크리스마스 디데이 할인'| '평일 할인'| '주말 할인'| '특별 할인'| '증정 이벤트'; discount: number}[]
   */
  #benefits;

  /** @type {{amountBeforeDiscount:number|undefined; amountAfterDiscount:number|undefined; totalBenefitAmount:number|undefined}} */
  #amount ={
    amountBeforeDiscount: undefined,
    amountAfterDiscount: undefined,
    totalBenefitAmount: undefined,
  };
  #badge ;
  
  async run() {
    await this.#takeReservation();
    this.#workOnAmountBeforeDiscount();
    this.#workOnEventBenefits();
    this.#workOnAmountsAfterDiscount();
    this.#workOnBadge();
  }
  //예약 방문일, 주문
  async #setReservation(){
    const reservationController = new ReservationController();
    this.#reservation =await reservationController.getReservation()
  };
  #printReservation() {
    OutputView.printEventPreview(this.#reservation.date);
    OutputView.printOrder(this.#reservation.order);
  }
  async #takeReservation (){
    await this.#setReservation();
    this.#printReservation();
  }
  // 할인 전 구매금액
  #setAmountBeforeDiscount() {
    const value = CalculatorController.getAmountBeforeDiscount(this.#reservation.order);

    this.#amount.amountBeforeDiscount = value;
  };
  #workOnAmountBeforeDiscount(){
    this.#setAmountBeforeDiscount();
    OutputController.controlPrintAmount('amountBeforeDiscount', this.#amount.amountBeforeDiscount);
  }
  // 할인 혜택
  #setEventBenefits() {
    const { date, order } = this.#reservation;
    const {amountBeforeDiscount}= this.#amount;
    this.#benefits = new EventController(
      date,
      order,
      amountBeforeDiscount,
    ).getBenefits();
  }
  #printEventBenefits(){
    OutputController.controlPrintGift(this.#benefits);
    OutputController.controlPrintBenefits(this.#benefits);
  }
  #workOnEventBenefits(){
    this.#setEventBenefits();
    this.#printEventBenefits();
  }
  //할인 이후 금액들(총 혜택 금액 , 할인 후 결제 금액) 
  #updateAmountAfterDiscount(){
    const amountsAfterDiscount = CalculatorController.getAmountsAfterDiscount(this.#benefits, this.#amount);

    this.#amount ={
      ...this.#amount,
      ...amountsAfterDiscount
  }}
  #printAmountsAfterDiscount(){
    const {totalBenefitAmount ,amountAfterDiscount} = this.#amount;

    OutputController.controlPrintAmount(
      'totalBenefitAmount',
      totalBenefitAmount,
      true,
    );
    OutputController.controlPrintAmount(
      'amountAfterDiscount',
      amountAfterDiscount,
    );
  };
  #workOnAmountsAfterDiscount(){
    this.#updateAmountAfterDiscount();
    this.#printAmountsAfterDiscount();
  }
  //배지
  #setBadge() {
    const badge = new Badge(this.#amount.totalBenefitAmount).getShape();
    if (badge) this.#badge = badge;
  }
  #workOnBadge(){
    this.#setBadge();
    OutputController.controlPrintBadge(this.#badge);
  }
}

export default App;
