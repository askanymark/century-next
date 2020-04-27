export default class NavbarItem extends HTMLElement {
  constructor() {
    super();
    this.innerText = `${this.getAttribute('name')}`;
  }
}
