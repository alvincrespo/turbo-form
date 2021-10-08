import { Application } from "@hotwired/stimulus";
import { DOMTestCase } from "./dom_test_case";

interface Schema {
  controllerAttribute: string
  actionAttribute: string
  targetAttribute: string
  targetAttributeForScope(identifier: string): string
}

const defaultSchema: Schema = {
  controllerAttribute: "data-controller",
  actionAttribute: "data-action",
  targetAttribute: "data-target",
  targetAttributeForScope: identifier => `data-${identifier}-target`
}

class TestApplication extends Application {
  handleError(error: Error, message: string, detail: object) {
    throw error
  }
}

export class ApplicationTestCase extends DOMTestCase {
  schema: Schema = defaultSchema
  application: Application = new TestApplication(this.fixtureElement, this.schema)

  async runTest(testName: string) {
    try {
      this.setupApplication()
      this.application.start()
      await super.runTest(testName)
    } finally {
      this.application.stop()
    }
  }

  setupApplication() {
    // Override in subclasses to register controllers
  }
}
