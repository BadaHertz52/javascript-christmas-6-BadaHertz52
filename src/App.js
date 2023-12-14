import { MESSAGE } from "./constants/index.js";
import {InputController, EventController} from "./controller/index.js";
import { Badge, Calculator } from "./model/index.js";
import {OutputView} from "./view/index.js";

class App {
  #reservation ={
    date:0,
    order:undefined,

  }
  #benefits = {
    dDay: 0,
    weekday: 0,
    weekend: 0,
    special: 0,
    gift: 0,
  }
  #amount ={
    beforeDiscount:0,
    totalBenefits:0,
    afterDiscount:0
  }
  async run() {
    OutputView.print(MESSAGE.greeting)
    await this.getReservation();
    if(this.#reservation.order && this.#reservation.date){
      this.#getBeforeDiscountAmount();
      this.#getBenefits();
      this.#getTotalBenefits();
      this.#getAfterDiscountAmount();
      this.#getBadge();
    }
  }
  #printReservation(){
    OutputView.printPreview(this.#reservation.date);
    OutputView.printMenu(this.#reservation.order)
  }

  async getReservation(){
    this.#reservation.date = await InputController.getReservation();
    this.#reservation.order = await InputController.getOrder();
    this.#printReservation();
  }

  #getBeforeDiscountAmount(){
    const amount = Calculator.getBeforeDiscountAmount(this.#reservation.order);
    this.#amount.beforeDiscount = amount;
    OutputView.printAmount('beforeDiscountAmount',amount, false)
  }
  #getBenefits(){
    const {beforeDiscount} = this.#amount;
    const {date, order} =this.#reservation

    this.#benefits = new EventController(beforeDiscount,date,order).getBenefits();
    OutputView.printGift(this.#benefits.gift);
    OutputView.printBenefits(this.#benefits);
  }
  #getTotalBenefits(){
    const amount = Calculator.getTotalBenefits(this.#benefits);
    this.#amount.totalBenefits  =amount;
    OutputView.printAmount('totalBenefits',amount, !!amount)
  }
  #getAfterDiscountAmount(){
    const {beforeDiscount ,totalBenefits} = this.#amount;
    const amount = Calculator.getAfterDiscountAmount(beforeDiscount, totalBenefits, this.#benefits)
    this.#amount.afterDiscount  =amount;
    OutputView.printAmount('afterDiscountAmount',amount, false)
  }
  #getBadge(){
    const badge = new Badge(this.#amount.totalBenefits).getBadge();
    OutputView.printBadge(badge);
  }
}

export default App;
