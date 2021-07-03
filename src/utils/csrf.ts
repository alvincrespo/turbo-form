interface CSRFElements {
  param: HTMLMetaElement | null,
  token: HTMLMetaElement | null
}

export class Csrf {
  private _elements: CSRFElements = {
    param: document.querySelector('meta[name=csrf-param]'),
    token: document.querySelector('meta[name=csrf-token]')
  }

  get name() {
    return this._elements.param ? this._elements.param.content : '';
  }
  
  get token() {
    return this._elements.token ? this._elements.token.content : '';
  }
}
