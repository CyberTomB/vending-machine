import ValuesController from "./Controllers/ValuesController.js";
import VendsController from "./Controllers/VendsController.js";

class App {
  valuesController = new ValuesController();
  vendsController = new VendsController();
}

window["app"] = new App();
