import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import superStyles from '~/styles/super.css?inline';
import styles from './onl-header.css?inline';

@customElement('onl-header')
export class OnlHeader extends LitElement {
  static styles = [unsafeCSS(superStyles), unsafeCSS(styles)];

  /** ユーザー名 */
  @property({ type: String }) name: string | null = null;

  render() {
    return html`<div><p>Hello World ${this.name}</p></div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'onl-header': OnlHeader;
  }
}
