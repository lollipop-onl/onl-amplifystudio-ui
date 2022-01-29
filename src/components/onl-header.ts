import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import common from '~/styles/common.css?inline';
import styles from './onl-header.css?inline';

@customElement('onl-header')
export class OnlHeader extends LitElement {
  static styles = [unsafeCSS(common), unsafeCSS(styles)];

  @property({ type: String }) name!: string;

  render() {
    return html`<div><p>Hello World ${this.name}</p></div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'onl-header': OnlHeader;
  }
}
