import React, { useState } from "react";

import { ReviewInput } from "./Review.styles";

const ReviewForm = () => {
  const [review, setReview] = useState("");
  const [stars, setStars] = useState([false, false, false, false, false]);
  const [rating, setRating] = useState(0);

  const handleInputChange = e => {
    setReview(e.target.value);
  };

  const handleSubmit = () => {
    console.log(review, rating);
  };

  const handleSetRating = number => {
    setRating(number);
    for (let i = 0; i < 5; i++) {
      if (i < number) stars[i] = true;
      else stars[i] = false;
    }
    setStars(stars);
  };

  return (
    <div>
      {stars.map((star, i) => (
        <i
          className="material-icons"
          style={
            star
              ? {
                  color: "yellow",
                  textShadow: "0 0 2px #aaa",
                  cursor: "pointer"
                }
              : { cursor: "pointer" }
          }
          onClick={() => handleSetRating(i + 1)}
        >
          star
        </i>
      ))}
      <ReviewInput
        value={review}
        placeholder="Write a review"
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ReviewForm;
