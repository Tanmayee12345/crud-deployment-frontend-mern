

import { useEffect, useState } from "react";
import Axios from 'axios';
import Books from "./Books";
import { useParams } from "react-router-dom";

function DisplayBooks(props) {
  const { data } = useParams();
  const [arr, setArr] = useState([]);

  useEffect(() => {
    Axios.get("https://crud-deployment1-backend-mern.onrender.com/studentRoute")
      .then((res) => {
        if (res.status === 200) {
          const filteredBooks = res.data.filter((val) => val.category === data);
          setArr(filteredBooks);
        }
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, [data]);

  

  const renderBooks =()=>{
    return arr.map((val,ind)=>{
        return <Books obj={val} key={ind} id={props.id} />
    })            
} 

  return (
    <div>
     
{console.log(props.id)}

<table className="table table-bordered table-striped table-info">
            <thead>
                <tr>
                    <th  class="text-center">Book Name</th>
                    <th  class="text-center">Author</th>
                    <th  class="text-center">Publishing Year</th>
                    <th  class="text-center" colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                {renderBooks()}
               
               
            </tbody>
        </table>
    </div>
  );
}

export default DisplayBooks;
