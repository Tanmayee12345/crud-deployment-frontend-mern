import { useState } from "react";

function Review(props) {
  const [name, setName] = useState(props.nameValue);
  const [bookname, setBookname] = useState(props.booknameValue);
  const [rating, setRating] = useState(props.ratingValue);
  const [category, setCategory] = useState('');
  const [review, setReview] = useState(props.reviewValue);

  const arr = [name, bookname, rating, category, review];

  const handleClick = () => {
    props.getState(arr);
  };

  const handleRatingChange = (event) => {
    // Ensure that the rating is between 1 and 5
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= 5) {
      setRating(value);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', maxWidth: "70%", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <div style={{ flex: 1, width: '100%', paddingRight: '20px' }}>
        <h2>Enter Review</h2>
        <input
          defaultValue={props.nameValue}
          onChange={(event) => setName(event.target.value)}
          className="form-control my-3"
          placeholder="Enter your name"
        />
        <input
          defaultValue={props.booknameValue}
          onChange={(event) => setBookname(event.target.value)}
          className="form-control my-3"
          placeholder="Enter book name"
        />
        <label style={{ width: '100%' }}>
          Select the most category you liked most
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control my-3"
          >
           <option value="">Select a category</option>
              <option value="Engineering">Engineering</option>
              <option value="Intermediate">Intermediate</option>
              <option value="IIT-JEE">IIT-JEE</option>
              <option value="NEET">NEET</option>
              <option value="UPSC">UPSC</option>
              <option value="Philosophy">Philosophy</option>
              <option value="music">Music</option>
              <option value="Mystery">Mystery</option>
              <option value="Art and Photography">Art and Photography</option>
              <option value="Travel">Travel</option>
              <option value="History">History</option>
              <option value="Economy">Economy</option>
          </select>
        </label>

        <input
          value={rating}
          onChange={handleRatingChange}
          className="form-control my-3"
          placeholder="Give rating out of 5 (1 to 5)"
          type="number"
          min="1"
          max="5"
        />

        <label style={{ width: '100%' }}>
          Review
          <textarea
            value={props.reviewValue}
            onChange={(e) => setReview(e.target.value)}
            className="form-control my-3"
            placeholder="Enter your review"
          />
        </label>

        <button
          onClick={handleClick}
          className="btn btn-info my-3 d-block mx-auto"
          type="submit"
        >
          Submit
        </button>
      </div>

      <div style={{ flex: 1, textAlign: 'center' }}>
        {/* Replace 'image-url.jpg' with the actual URL of your image */}
        <img src="rev.jpg" alt="Review Image" style={{ maxWidth: '80%', height: 'auto' }} />
      </div>
    </div>
  );
}

export default Review;