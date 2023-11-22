import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import StudentListRow1 from './studentListRow1';

function StudentList1(props) {
  const [arr, setArr] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    Axios.get('https://crud-deployment1-backend-mern.onrender.com/studentRoute/')
      .then((res) => {
        if (res.status === 200) {
          setArr(res.data);
          setFilteredArr(res.data);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, []);

  useEffect(() => {
    // Apply search filter
    const filteredData = arr.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArr(filteredData);
  }, [searchTerm, arr]);

  const ListItems = () => {
    return filteredArr.map((val, ind) => (
      <StudentListRow1 obj={val} key={ind} id={props.id} />
    ));
  };

  return (
    <div>
      <input
        type="text"
        className="form-control bg-light text-dark"
        placeholder="Search by book name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
     

<div style={{maxWidth:"80%" }} className="table-responsive mx-auto px-3">
      
      {ListItems()}
    </div>
    </div>
  );
}

export default StudentList1;
