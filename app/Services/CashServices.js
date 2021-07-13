import { ProxyState } from "../AppState.js";

class CashSerivces {
   addQuarter() {
      ProxyState.cash += 25
   }
}

export const cashService = new CashSerivces()