import Axios from "axios";
import { useEffect,useState } from "react";
import StudentListRow from "./StudentListRow";
import Reviewsget1 from "./reviewsget1";
function Reviewsget()
{
    const [arr,setArr]=useState([]);
    useEffect(()=>{
   Axios.get("https://crud-deployment1-backend-mern.onrender.com/reviewRoute/")
   .then((res)=>{
    if(res.status===200)
    setArr(res.data)
else
Promise.reject();
   })
   .catch((err)=>alert(err));
    },[]);
    const ListItems=()=>{
        return arr.map((val,ind)=>{
            return <Reviewsget1 obj={val}/>
        })
    }
    return (
        <div>

{ListItems()}
        </div>
                
                
        
        
    )
    
}
export default Reviewsget;