import { ProxyState } from "../AppState.js";
import { cashService } from "../Services/CashServices.js";

function _drawCash() {
   let cash = ProxyState.cash
   document.getElementById('cash').innerText = `Cash: $${cash.toString()}`
}

export default class CashController {
   constructor() {
      _drawCash()
   }

   addQuarter() {
      cashService.addQuarter()
      _drawCash()
   }
}