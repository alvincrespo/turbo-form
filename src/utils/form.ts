import { Csrf } from "./csrf";

interface IFormProps {
  action: string;
  target: string;
  method: string;
}

export class Form {
  csrf = new Csrf()

  action: string;
  target: string;
  method: string;

  constructor(props: IFormProps) {
    this.action = props.action;
    this.target = props.target;
    this.method = props.method;
  }

  static create(props: IFormProps) {
    return new Form(props).generate();
  }

  generate() {
    const form = document.createElement('form');

    const content = `
      <input name='_method' value='${this.method}' type='hidden' />
      <input name="${this.csrf.name}" value="${this.csrf.token}" type="hidden" />
      <input type="submit" />
    `;
    form.method = 'post';
    form.action = this.action;
    form.target = this.target;
    form.innerHTML = content;
    form.style.display = 'none';
    document.body.appendChild(form);

    return form;
  }
}
