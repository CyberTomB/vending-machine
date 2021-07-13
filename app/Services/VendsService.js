import { ProxyState } from "../AppState.js";

class VendsService {
   vend() {
      console.log(ProxyState.snack)
   }
}

export const vendsService = new VendsService()