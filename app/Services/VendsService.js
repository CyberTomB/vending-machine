import { ProxyState } from "../AppState.js";

class VendsService {
   vend(str) {
      console.log(str)
      console.log(ProxyState.snickers)
   }
}

export const vendsService = new VendsService()