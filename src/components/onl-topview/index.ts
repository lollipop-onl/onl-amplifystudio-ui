import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import Swiper, { Pagination, Autoplay } from 'swiper';
// @ts-expect-error
import swiperCss from 'swiper/css';
// @ts-expect-error
import swiperPaginationCss from 'swiper/css/pagination';
// @ts-expect-error
import swiperAutoplayCss from 'swiper/css/autoplay';
import superStyles from '~/styles/super.css?inline';
import styles from './index.css?inline';

type TopViewItem = {
  image: string;
  alt?: string;
};

console.log(swiperCss)

@customElement('onl-topview')
export class OnlTopview extends LitElement {
  static styles = [
    unsafeCSS(superStyles),
    unsafeCSS(swiperCss),
    unsafeCSS(swiperPaginationCss),
    unsafeCSS(swiperAutoplayCss),
    unsafeCSS(styles),
  ];

  /** トップビューの画像一覧 */
  @property({ type: Array }) topviews: TopViewItem[] = [];

  @state() swiper: Swiper | undefined;

  @query('.swiperContainer') swiperContainer: HTMLDivElement | undefined;
  @query('.swiper-pagination') swiperPagination: HTMLDivElement | undefined;

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  protected firstUpdated(): void {
    if (!this.swiperContainer) return;

    this.swiper = new Swiper(this.swiperContainer, {
      modules: [Pagination, Autoplay],
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: this.swiperPagination,
        bulletElement: 'button',
        clickable: true,
      },
    });
  }

  render() {
    return html`
      <div class="swiperContainer">
        <div class="swiper-wrapper">
          ${this.topviews.map(
            ({ image, alt = '' }) => html`
              <div class="swiper-slide">
                <img src=${image} alt=${alt} />
              </div>
            `
          )}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'onl-topview': OnlTopview;
  }
}
