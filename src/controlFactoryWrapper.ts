import { initialize } from "aurelia-pal-nodejs";
import "aurelia-polyfills";
import { Container, autoinject, inject } from "aurelia-dependency-injection";
import { ControlFactory } from "custom-controls";
import { configure as configureBindingLanguage } from "aurelia-templating-binding";
import { configure as configureValidation } from "aurelia-validation";

@autoinject
export class ControlFactoryWrapper {
  constructor(
    private customControlFactory: ControlFactory,
    private container: Container
  ) {
    //  console.debug("args", arguments);
    initialize();
    configureBindingLanguage({ container });
    configureValidation({ container });
  }

  procesJson() {
    console.log("cfw class", this.customControlFactory);
    return this.customControlFactory;
  }
}
