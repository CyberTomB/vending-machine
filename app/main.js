import CashController from "./Controllers/CashController.js";
import ValuesController from "./Controllers/ValuesController.js";
import VendsController from "./Controllers/VendsController.js";

class App {
  valuesController = new ValuesController();
  vendsController = new VendsController();
  cashController = new CashController();
}

window["app"] = new App();
