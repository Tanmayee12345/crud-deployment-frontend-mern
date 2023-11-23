import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function CartItem(props) {
  const [timing, setTiming] = useState({
    formattedCurrentDate: '',
    formattedReturnDate: '',
  });

  useEffect(() => {
    const calculateTiming = () => {
      const currentDate = new Date();
      const returnDate = new Date(currentDate);
      returnDate.setDate(currentDate.getDate() + 7);

      // Format date without time
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedCurrentDate = currentDate.toLocaleDateString(undefined, options);
      const formattedReturnDate = returnDate.toLocaleDateString(undefined, options);

      setTiming({
        formattedCurrentDate,
        formattedReturnDate,
      });
    };

    calculateTiming(); // Call the function to calculate timing when the component mounts
  }, []); // Empty dependency array ensures this runs only once, similar to componentDidMount

  const handleClick = () => {
    Axios.delete(`https://crud-deployment1-backend-mern.onrender.com/Route/delete-cart/${props.val._id}`)
      .then((res) => {
        if (res.status === 200) {
          alert('Item deleted from Cart');
          
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <div className="card my-3">
        <h5 className="card-header">{props.val.bookname}</h5>
        <div className="card-body">
         
          <p className="card-text">
            Taken on: {timing.formattedCurrentDate}
            <br />
            Return by: {timing.formattedReturnDate}
          </p>
          <button className="btn btn-info" onClick={handleClick}>
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;