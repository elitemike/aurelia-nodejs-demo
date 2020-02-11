import { autoinject } from "aurelia-dependency-injection";
import { ControlFactory } from "control-set-factory";

@autoinject
export class ControlFactoryWrapper {
  private controlFactory: ControlFactory = null;
  constructor() {}
  // procesJson() {
  //   console.log("cfw class", this.customControlFactory);
  //   return this.customControlFactory;
  // }
  procesJson() {
    return this;
  }
}
