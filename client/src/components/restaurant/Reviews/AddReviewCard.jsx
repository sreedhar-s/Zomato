import React, { useState } from "react";


//components
import ReviewModal from "./ReviewModal";

const AddReviewCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <h3 className="text-xl font-medium">Rate your Experience </h3>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <label htmlFor="dining">Dining</label>
          <input type="radio" name="review" id="dining" />
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="delivery">Delivery</label>
          <input type="radio" name="review" id="delivery" />
        </div>
      </div>
      <button onClick={openModal} className="text-zomato-400">
        Write a review
      </button>
    </>
  );
};

export default AddReviewCard;
