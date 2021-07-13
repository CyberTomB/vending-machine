import { ProxyState } from "../AppState";

class VendsService {
   vend() {
      console.log(ProxyState.snack)
   }
}

export const vendsService = new VendsService()