import { BindingEngine } from "aurelia-binding";
// import "reflect-metadata";
import { initialize } from "aurelia-pal-nodejs";
import { ControlFactoryWrapper } from "./controlFactoryWrapper";
import { Container } from "aurelia-dependency-injection";

import { configure as configureBindingLanguage } from "aurelia-templating-binding";
import { configure as configureValidation } from "aurelia-validation";

export class AureliaDIContainer {
  static bootstrap() {
    initialize();
    let container = new Container();

    configureBindingLanguage({ container });
    configureValidation({ container });

    console.log("init");
    let bindingEngine = container.get(BindingEngine);
    let cfw = container.get(ControlFactoryWrapper);

    console.debug("result", cfw.procesJson());
  }
}

AureliaDIContainer.bootstrap();
