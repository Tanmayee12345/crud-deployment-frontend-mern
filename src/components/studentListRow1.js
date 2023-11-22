import React, { useState } from "react";
import Axios from "axios";

function StudentListRow1(props) {
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
 



    <div  style={{ maxWidth:"110vh"}}>
    <div class="card my-4 " >
  <h5 class="card-header bg-info">{name}</h5>
  <div class="card-body">
    <h5 class="card-title">Author : {email}</h5>
    <p class="card-text">Publishing Year : {rollNo}</p>
    <button className="btn btn-secondary" onClick={handleClick}>Summary</button>
    
       

<button onClick={handleClick2} className="btn btn-secondary mx-3">Add to cart</button>
{showSummary ?(
          <div>
           
            <p>{summary}</p>
          </div>
        ):(null)}
  </div>
</div>
</div>
  );
}

export default StudentListRow1;