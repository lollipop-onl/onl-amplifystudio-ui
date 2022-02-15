import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { path } from '~/utils';
import logoSrc from '~/assets/images/logo.svg';
import superStyles from '~/styles/super.css?inline';
import styles from './index.css?inline';

const NAVBAR_MENU_ITEMS = [
  { text: 'Welcome', path: path('/') },
  { text: 'Gallery', path: path('/gallery') },
  { text: 'ToDo list', path: path('/todos') },
  { text: 'Contact', path: path('/contact') },
];

@customElement('onl-navbar')
export class OnlNavbar extends LitElement {
  static styles = [unsafeCSS(superStyles), unsafeCSS(styles)];

  @property({ type: String }) avatar: string | null = null;

  protected render() {
    return html`
      <header class="onlNavbar">
        <button class="logo" @click=${() => window.goto(path('/'))}>
          <img src=${logoSrc} width="69" height="45" />
        </button>
        <ul class="menu">
          ${NAVBAR_MENU_ITEMS.map(
            ({ text, path }) => html`
              <li class="item">
                <button
                  class="link"
                  ?disabled=${window.currentPath === path}
                  @click=${() => window.goto(path)}
                >
                  ${text}
                </button>
              </li>
            `
          )}
        </ul>
        ${this.avatar
          ? html`<img
              class="avatar"
              .src=${this.avatar}
              width="45"
              height="45"
              loading="lazy"
            />`
          : null}
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'onl-navbar': OnlNavbar;
  }
}
