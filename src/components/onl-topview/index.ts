import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import Swiper, { Pagination, Autoplay } from 'swiper';
// モジュールの仕組み上 swiper/css だとモジュールを解決してくれなかった
// @ts-expect-error
import swiperCss from '../../../node_modules/swiper/swiper.min.css';
// @ts-expect-error
import swiperPaginationCss from '../../../node_modules/swiper/modules/pagination/pagination.min.css';
// @ts-expect-error
import swiperAutoplayCss from '../../../node_modules/swiper/modules/autoplay/autoplay.min.css';
import superStyles from '~/styles/super.css?inline';
import styles from './index.css?inline';

type TopViewItem = {
  image: string;
  alt?: string;
};

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

  @query('.swiper') swiperContainer: HTMLDivElement | undefined;
  @query('.swiper-navigation-next') swiperNavigationNext: HTMLDivElement | undefined;
  @query('.swiper-navigation-prev') swiperNavigationPrev: HTMLDivElement | undefined;
  @query('.swiper-pagination') swiperPagination: HTMLDivElement | undefined;

  disconnectedCallback(): void {
    super.disconnectedCallback();

    this.swiper?.destroy(true, true);
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
      <div class="swiper swiperContainer">
        <div class="swiper-wrapper">
          ${this.topviews.map(
            ({ image, alt = '' }) => html`
              <div class="swiper-slide swiperSlide">
                <img class="image" src=${image} alt=${alt} />
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
