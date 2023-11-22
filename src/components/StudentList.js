import Axios from "axios";
import { useEffect, useState } from "react";
import StudentListRow from "./StudentListRow";

function StudentList() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    Axios.get("https://crud-deployment1-backend-mern.onrender.com/studentRoute/")
      .then((res) => {
        if (res.status === 200) setArr(res.data);
        else Promise.reject();
      })
      .catch((err) => alert(err));
  }, []);

  const ListItems = () => {
    return arr.map((val, ind) => {
      return <StudentListRow key={ind} obj={val} />;
    });
  };

  return (
    <div style={{maxWidth:"80%" }} className="table-responsive mx-auto px-3">
      
      {ListItems()}
    </div>
  );
}

export default StudentList;
