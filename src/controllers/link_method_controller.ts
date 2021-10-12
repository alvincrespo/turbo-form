import { Controller } from "@hotwired/stimulus";
import { Form } from '../utils/form';

// Reference: https://github.com/rails/rails/blob/main/actionview/app/assets/javascripts/rails-ujs/features/method.coffee
export class LinkMethodController extends Controller {
  form: HTMLFormElement = document.createElement('form');

  get element(): HTMLLinkElement {
    return this.scope.element as HTMLLinkElement;
  }

  connect() {
    this.element.addEventListener('click', (event) => this.onClick(event));
  }

  onClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.createForm().submitForm();
  }

  createForm() {
    this.form = Form.create({
      action: this.element.href,
      target: this.element.target,
      method: this.method
    });

    return this;
  }

  submitForm() {
    (this.form.querySelector('[type=submit]') as HTMLInputElement).click();
  }

  get method() {
    return this.element.dataset.method || "post";
  }
}
