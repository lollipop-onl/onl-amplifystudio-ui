import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('onl-header')
export class OnlHeader extends LitElement {
  @property({ type: String }) name!: string;

  render() {
    return html`<p>Hello World ${this.name}</p>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'onl-header': OnlHeader;
  }
}
