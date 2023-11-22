



import React from "react";

function Reviewsget1(props) {
  const { name, bookname, rating, category, review } = props.obj;

  return (
    <div className="card bg-light" style={{ width: '18rem', marginRight: '10px', display: 'inline-block' }}>
      <div className="card-body">
        <h5 className="card-title text-primary ">{category}</h5>
        <p className="card-text">{bookname}</p>
        <p className="card-text">{review}</p>
        <p className="card-text">Rating: {rating}</p>
      </div>
    </div>
  );
}

export default Reviewsget1;
