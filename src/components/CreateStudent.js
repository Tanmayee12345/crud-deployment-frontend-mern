import { useState } from "react";
import StudentForm from "./StudentForm";
import Axios from "axios";

function CreateStudent()
{
    const [arr,setArr] = useState([]); //arr=[Raj,raj@gmail.com,1]

    //Declaring a argument function
    const getState = (childData) => { //childData=[Raj,raj@gmail.com,1]
        setArr(childData);
    }

    const handleSubmit = () => {
        const data = { category:arr[0],name: arr[1],email:arr[2],rollNo:arr[3],summary:arr[4]};
        Axios.post("https://crud-deployment1-backend-mern.onrender.com/studentRoute/create-student",data)
        .then((res)=>{
            if(res.status === 200)
                alert("Book added successfully");
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }

    return (
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState} />
        </form>
    )
}
export default CreateStudent;
