import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './onl-header.css';

console.log(styles)

@customElement('onl-header')
export class OnlHeader extends LitElement {
  static styles = [
    unsafeCSS(styles),
    css`
      p {
        color: red;
        -webkit-line-clamp: 3;
        line-clamp: 2;
      }

      div {
        & > p {
          font-weight: bold;
        }
      }
    `
  ]

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
