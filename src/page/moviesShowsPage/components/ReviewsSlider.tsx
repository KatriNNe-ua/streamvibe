import { useRef, type ReactElement } from "react";
import type { DataDB } from "../../../data/dataDB";
import TwoElementSwiper from "../../../components/swiper/TwoElementSwiper";
import SwiperSlideReviewsSlider from "./SwiperSlideReviewsSlider";
import { SwiperSlide } from "swiper/react";

type Props = {
  item: DataDB;
}; 

function ReviewsSlider({ item }: Props): ReactElement {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="info__reviews reviews">
        <div className="reviews__header">
          <h4 className="reviews__label">Reviews</h4>
          <button className="reviews__button button button--border">
            <span className="-icon-plus">Add Your Review</span>
          </button>
        </div>
        <TwoElementSwiper
          prevRef={prevRef}
          nextRef={nextRef}
          paginationRef={paginationRef}
        >
          {item.reviews?.map((review) => (
            <SwiperSlide className="reviews__slider" key={review.id}>
              <SwiperSlideReviewsSlider review={review}  />
            </SwiperSlide>
          ))}
        </TwoElementSwiper>
        <div className="reviews__controls">
          <button
            ref={prevRef}
            type="button"
            className="reviews__arrow reviews__arrow--left -icon-slider-arrow"
            aria-label="button back"
          ></button>
          <div ref={paginationRef} className="reviews__bullets"></div>
          <button
            ref={nextRef}
            type="button"
            className="reviews__arrow reviews__arrow--right -icon-slider-arrow"
            aria-label="button forward"
          ></button>
        </div>
      </div>
    </>
  );
}

export default ReviewsSlider;

{
  /* <div className="reviews__slider swiper">
								<div className="reviews__wrapper swiper-wrapper">
									<article className="reviews__slide swiper-slide">
										<div className="reviews__up">
											<div className="reviews__info">
												<h4 className="reviews__name">Aniket Roy</h4>
												<div className="reviews__from">From India</div>
											</div>
											<div className="reviews__rating rating">
												<div className="rating__body">
													<div className="rating__stars">
														<div className="rating__active"></div>
													</div>
													<div className="rating__value">4.3</div>
												</div>
											</div>
										</div>
										<div className="reviews__text">
											<p>This movie was recommended to me by a very dear friend who went for
												the movie by herself. I went to the
												cinemas to watch but had a houseful board so couldn’t watch it.</p>
										</div>


									</article>
									<article class="reviews__slide swiper-slide">
										<div class="reviews__up">
											<div class="reviews__info">
												<h4 class="reviews__name">Swaraj</h4>
												<div class="reviews__from">From India</div>
											</div>
											<div class="reviews__rating rating">
												<div class="rating__body">
													<div class="rating__stars">
														<div class="rating__active"></div>
													</div>
													<div class="rating__value">5</div>
												</div>
											</div>
										</div>
										<div class="reviews__text">
											<p>n exchange of a stone (Panjurli, a deity of Keradi Village) wherein he
												finds solace and peace of mind.</p>
										</div>
									</article>
									<article class="reviews__slide swiper-slide">
										<div class="reviews__up">
											<div class="reviews__info">
												<h4 class="reviews__name">Aniket Roy</h4>
												<div class="reviews__from">From India</div>
											</div>
											<div class="reviews__rating rating">
												<div class="rating__body">
													<div class="rating__stars">
														<div class="rating__active"></div>
													</div>
													<div className="rating__value">3.8</div>
												</div>
											</div>
										</div>
										<div className="reviews__text">
											<p>This movie was recommended to me by a very dear friend who went for
												the movie by herself. I went to the
												cinemas to watch but had a houseful board so couldn’t watch it.</p>
										</div>
									</article>
								</div>
							</div>
							 */
}
