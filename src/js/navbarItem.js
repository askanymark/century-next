class NavbarItem extends HTMLElement {
  constructor() {
    super();
    this.innerText = `${this.getAttribute('name')}`;
  }
}

window.customElements.define('navbar-item', NavbarItem);
