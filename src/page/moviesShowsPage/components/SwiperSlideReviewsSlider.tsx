import { memo, type ReactElement } from "react";
import type { Review } from "../../../data/dataDB";

import Rating from "../../components/Rating";

type Props = {
  review: Review;
};

function SwiperSlideReviewsSlider({ review }:Props): ReactElement {
  return (

      <article className="reviews__slide swiper-slide"> 
        <div className="reviews__up">
          <div className="reviews__info">
            <h4 className="reviews__name">{review.author}</h4>
            <div className="reviews__from">From {review.country}</div>
          </div>
          <div className="reviews__rating">
            <Rating value={review.rating} />
            {review.rating}
          </div>
        </div>
        <div className="reviews__text">
          <p>{review.text}</p>
        </div>
      </article>

  );
}

export default memo(SwiperSlideReviewsSlider);