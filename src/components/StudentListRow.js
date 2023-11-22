import Axios from "axios";

function StudentListRow(props) {
  const { _id, name, email, rollNo } = props.obj;

  const handleClick = () => {
    Axios.delete("https://crud-deployment1-backend-mern.onrender.com/studentRoute/delete-student/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("Book deleted successfully");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  };

  return (
   
    <div  style={{ maxWidth:"110vh"}}>
    <div class="card my-4 " >
  <h5 class="card-header bg-info">{name}</h5>
  <div class="card-body">
    <h5 class="card-title">Author : {email}</h5>
    <p class="card-text">Publishing Year : {rollNo}</p>
    <button className="btn btn-secondary" onClick={handleClick}>Delete</button>
  </div>
</div>
</div>
  );
}

export default StudentListRow;
