class Page {
  constructor(json) {
    Object.assign(this, json);
  }

  async loadComponent() {
    const module = await import(`../pages/${this.page}`);
    this._component = module.default;
  }

  get component() {
    return this._component;
  }
}

export default Page;
