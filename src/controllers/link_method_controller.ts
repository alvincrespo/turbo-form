import { Controller } from "@hotwired/stimulus";
import { Csrf } from "../utils/csrf";

// Reference: https://github.com/rails/rails/blob/main/actionview/app/assets/javascripts/rails-ujs/features/method.coffee
export class LinkMethodController extends Controller {
  csrf = new Csrf()

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
    const form = document.createElement('form');

    this.form = form;

    const content = `
      <input name='_method' value='${this.method}' type='hidden' />
      <input name="${this.csrf.name}" value="${this.csrf.token}" type="hidden" />
      <input type="submit" />
    `;
    form.method = 'post';
    form.action = this.element.href;
    form.target = this.element.target;
    form.innerHTML = content;
    form.style.display = 'none';
    document.body.appendChild(form);

    return this;
  }

  submitForm() {
    (this.form.querySelector('[type=submit]') as HTMLInputElement).click();
  }

  get method() {
    return this.element.dataset.method || "post";
  }
}
