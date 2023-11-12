import { InputController } from './controllers/index.js';
import OutputView from './views/OutputView.js';

class App {
  #reservation = {
    date: undefined,
  };
  async run() {
    await this.getReservationDate();
    OutputView.printEventPreview(this.#reservation.date);
  }
  async getReservationDate() {
    const date = await InputController.getValidReservationDate();
    this.#reservation.date = date;
  }
}

export default App;
