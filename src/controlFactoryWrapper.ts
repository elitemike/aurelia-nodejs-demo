import { BindingEngine } from "aurelia-binding";
import { initialize } from "aurelia-pal-nodejs";
import "aurelia-polyfills";
import { Container, autoinject } from "aurelia-dependency-injection";
import { configure as configureBindingLanguage } from "aurelia-templating-binding";
import { configure as configureValidation } from "aurelia-validation";

@autoinject
export class ControlFactoryWrapper {
  constructor(
    private bindingEngine: BindingEngine,
    private container: Container
  ) {
    initialize();
    configureBindingLanguage({ container });
    configureValidation({ container });
  }

  procesJson() {
    // console.log("cfw class", this.customControlFactory);
    // return this.customControlFactory;
    return "processed";
  }
}
