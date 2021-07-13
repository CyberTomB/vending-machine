import { ProxyState } from "../AppState.js";

class CashSerivces {
   addQuarter() {
      ProxyState.cash += 0.25
   }
}

export const cashService = new CashSerivces()