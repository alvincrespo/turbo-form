import { LinkMethodController } from "src/controllers";
import { ApplicationTestCase } from "./application_test_case";

export class LinkMethodControllerTests extends ApplicationTestCase {
  setupApplication() {
    this.application.register('link-method', LinkMethodController);
  }
}
