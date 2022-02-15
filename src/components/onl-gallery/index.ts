import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import lightGallery from 'lightgallery';
import type { LightGallery } from 'lightgallery/lightgallery'
import superStyles from '~/styles/super.css?inline';
import styles from './index.css?inline';
// @ts-expect-error
import lightGalleryBundleStyles from 'lightgallery/css/lightgallery-bundle.css';

console.log(styles)

type GalleryItem = {
  title?: string;
  image: string;
  alt?: string;
}

@customElement('onl-gallery')
export class OnlGallery extends LitElement {
  static styles = [unsafeCSS(superStyles), unsafeCSS(lightGalleryBundleStyles), unsafeCSS(styles)];

  @property({ type: Array }) items: GalleryItem[] = [];

  @query('#lightgallery') galleryContainer: HTMLDivElement | undefined;

  @state() lightGallery: LightGallery | undefined;

  disconnectedCallback(): void {
    super.disconnectedCallback();

    this.lightGallery?.destroy();
  }

  protected firstUpdated(): void {
    if (!this.galleryContainer) return;

    this.lightGallery = lightGallery(this.galleryContainer, { thumbnail: true });
  }

  render() {
    return html`
      <div id="lightgallery" class="onlGallery">
        ${this.items.map(({ title, image, alt }) => html`
          <a class="item" href=${image} data-sub-html=${title || ''}>
            <img class="image" src=${image} alt=${alt || ''} />
          </a>
        `)}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'onl-gallery': OnlGallery;
  }
}
