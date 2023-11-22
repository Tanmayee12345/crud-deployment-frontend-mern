import { useState } from "react";
import Review from "./reviews";

import Axios from "axios";

function CreateStudent1()
{
    const [arr,setArr] = useState([]); //arr=[Raj,raj@gmail.com,1]

    

    //Declaring a argument function
    const getState = (childData) => { //childData=[Raj,raj@gmail.com,1]
        setArr(childData);
        
    }
   
                                 
    const handleSubmit = () => {
        const data = { name: arr[0],bookname:arr[1],rating:arr[2],category:arr[3],review:arr[4]};
        Axios.post("https://crud-deployment1-backend-mern.onrender.com/reviewRoute/create-review",data)
        .then((res)=>{
            if(res.status === 200)
                alert("Review sent successfully");
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }

    return (
        <form onSubmit={handleSubmit}>
            < Review getState={getState} />
        </form>


    )
}
export default CreateStudent1;