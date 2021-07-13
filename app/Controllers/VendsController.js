import { ProxyState } from "../AppState.js"
import { vendsService } from "../Services/VendsService.js"

export default class VendsController {
   vend(str) {
      vendsService.vend(str)
   }
}