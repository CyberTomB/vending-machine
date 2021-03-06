import Value from "./Models/Value.js"
import Snack from "./Models/Snacks.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
   /** @type {Value[]} */
   snacks = {
      snickers: new Snack('snickers', 1),
      twix: new Snack('twix', 1.25),
      skittles: new Snack('skittles', 0.75)
   }
   values = []

   cash = 0
}

export const ProxyState = new Proxy(new AppState(), {
   get(target, prop) {
      isValidProp(target, prop)
      return target[prop]
   },
   set(target, prop, value) {
      isValidProp(target, prop)
      target[prop] = value
      target.emit(prop, value)
      return true
   }
})
