interface CSRFElements {
  param: HTMLMetaElement | null,
  token: HTMLMetaElement | null
}

// Reference: https://github.com/rails/rails/commit/ad3a47759e67a411f3534309cdd704f12f6930a7#diff-86b08dbffd1c08433d06cd4f33e9e4bc2b2a1ccf14d466a369713d98d48b3ea8
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
