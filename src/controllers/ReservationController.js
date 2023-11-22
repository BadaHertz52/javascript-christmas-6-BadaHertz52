import { OutputView } from '../views/index.js';
import { InputController, OutputController } from './index.js';

class ReservationController {
  /**
   * @type {{date:number|undefined; order:Order|undefined}}

   * @description 
      type FoodName ="양송이스푸"|"타파스"|....|"샴페인";
      type FoodType ='appetizer'|'main'|'dessert'|'beverage' ;
      type OrderMenu ={ food:string, type:FoodType, price:number, numberOfOrder:number};
      type Order =OrderMenu[];
   */
  #reservation = {
    date: undefined,
    order: undefined,
  };
  constructor() {
    OutputView.printGreetings();
  }
  async #getReservationDate() {
    const date = await InputController.getValidReservationDate();
    this.#reservation.date = date;
  }
  #readyToGetOrder() {
    //이벤트 주의 사항 안내
    OutputView.printNotesOnEvent();
    //메뉴판 출력
    OutputController.controlPrintMenuByType();
  }
  async #getOrder() {
    this.#readyToGetOrder();
    const order = await InputController.getValidOrder();
    this.#reservation.order = order;
  }
  /**
   *
   * @returns {Promise<{date:number|undefined; order:Order|undefined}>}
   */
  async getReservation() {
    await this.#getReservationDate();
    await this.#getOrder();

    return this.#reservation;
  }
}

export default ReservationController;
