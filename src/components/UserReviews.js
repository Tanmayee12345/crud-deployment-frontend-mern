// UserReviews.js
import React, { useState } from 'react';

const UserReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    userName: '',
    bookName: '',
    reviewText: '',
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleRatingChange = (e) => {
    const rating = parseInt(e.target.value, 10);
    setNewReview((prevReview) => ({
      ...prevReview,
      rating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews((prevReviews) => [...prevReviews, newReview]);
    setNewReview({
      userName: '',
      bookName: '',
      reviewText: '',
      rating: 0,
    });
  };

  return (
    <div className="user-reviews-container">
      <h2>User Reviews</h2>

      {/* Display Existing Reviews */}
      {reviews.map((review, index) => (
        <div key={index} className="user-review">
          <p>
            <strong>{review.userName}</strong> reviewed <strong>{review.bookName}</strong> with a rating of{' '}
            <strong>{review.rating}/5</strong>:
          </p>
          <p>{review.reviewText}</p>
        </div>
      ))}

      {/* Add New Review Form */}
      <form onSubmit={handleSubmit} className="new-review-form">
        <label>
          User Name:
          <input
            type="text"
            name="userName"
            value={newReview.userName}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Book Name:
          <input
            type="text"
            name="bookName"
            value={newReview.bookName}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Review (under 10 lines):
          <textarea
            name="reviewText"
            value={newReview.reviewText}
            onChange={handleInputChange}
            maxLength="500"
            rows="5"
            required
          ></textarea>
        </label>

        <label>
          Rating (out of 5):
          <input
            type="number"
            name="rating"
            value={newReview.rating}
            onChange={handleRatingChange}
            min="0"
            max="5"
            required
          />
        </label>

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default UserReviews;