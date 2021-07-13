import { ProxyState } from "../AppState.js"
import { vendsService } from "../Services/VendsService.js"

export class VendsController {
   test() {
      vendsService.vend()
   }
}