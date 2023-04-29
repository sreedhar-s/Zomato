import React, { useState } from 'react';
import Rating from "react-rating-stars-component";

//component
import ReviewCard from '../../components/restaurant/Reviews/reviewCard';
import AddReviewCard from '../../components/restaurant/Reviews/AddReviewCard';

const Review = () => {
  const [reviews, setReviews] = useState(["","",""]);
  const handleRating = (value) => console.log(value);

  return (
    <>
      <div className='flex flex-col gap-4 md:flex-row relative'>
        <div className='w-full md:w-3/5 flex flex-col gap-3'>
          <div className='md:hidden'>
            <AddReviewCard />
          </div>
          {
            reviews.map((review) => (
              <ReviewCard {...review} />
            ))
          }
        </div>
        <aside style={{height: "fit-content"}} className='hidden rounded-xl md:flex items-start md:w-2/5 sticky top-2 bg-white-300 p-3 shadow-md flex-col gap-3'>
          <AddReviewCard />
        </aside>
      </div>
    </>
  )
}

export default Review;

