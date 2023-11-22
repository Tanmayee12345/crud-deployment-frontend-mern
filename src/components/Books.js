


import React, { useState } from "react";
import Axios from "axios";

function Books(props) {
  const { _id, name, email, rollNo } = props.obj;

  const [showSummary, setShowSummary] = useState(false);
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState(null);
  let count=0;
  const handleClick = () => {
    count+=1
    if(count%2!==0){
      Axios.get('https://crud-deployment1-backend-mern.onrender.com/studentRoute/view/${_id}')
        .then((res) => {
          if (res.status === 200) {
            const foundStudent = res.data.find((student) => student._id === _id);
            if (foundStudent) {
              const studentSummary = foundStudent.summary;
              setSummary(studentSummary);
              setShowSummary(true);
            } else {
              setError("Summary not found for this student");
            }
          } else {
            setError("Request failed");
          }
        })
        .catch((err) => {
          setError("Error fetching data");
        });
      }
      else{
        setSummary("")
      }
     
  };
  const handleClick2=()=>{
    const data={id:props.id,bookid:props.obj._id,bookname:name};
    console.log(data)
    Axios.post("https://crud-deployment1-backend-mern.onrender.com/Route/create-cart",data)
    .then((res)=>{
      if(res.status===200){
        alert("Book added to Cart");
      }
      else{
        Promise.reject();
      }
    })
    .catch((err)=>alert(err))
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{rollNo}</td>
      <td>
        <button onClick={handleClick} className="btn btn-secondary">
          Summary
        </button>
        {showSummary && (
          <div>
           
            <p>{summary}</p>
          </div>
        )}
        {error && (
          <div>
            <p>Error: {error}</p>
          </div>
        )}
      </td>
      <td>
        <button onClick={handleClick2} className="btn btn-dark mx-3">Add to cart</button>
      </td>
    </tr>
  );
}

export default Books;