import { ControlFactoryWrapper } from "./controlFactoryWrapper";
import { Container } from "aurelia-dependency-injection";

export class AureliaDIContainer {
  static bootstrap() {
    let container = new Container();
    let cfw = container.get(ControlFactoryWrapper);

    console.debug("result", cfw.procesJson());
  }
}

AureliaDIContainer.bootstrap();
