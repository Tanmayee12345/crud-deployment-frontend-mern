import React, { useEffect, useState } from "react";
import Axios from 'axios';
import CartItems from "./cartItems";
function Cart(props) {
  const [arr,setArr]=useState("");

  useEffect(()=>{
    Axios.get("https://crud-deployment1-backend-mern.onrender.com/Route/get-cart")
    .then((res)=>{
      if(res.status===200){
        let content=[]
        var count=0;
        res.data.map((val,index)=>{
          if(val.id===props.id){
              content[count]=val;
              count+=1;
          }
        })
        setArr(content)
      }
    })
  },[props])
  let cartItems;
  try{
    cartItems = arr && Array.isArray(arr) ? arr.map((val, index) => <CartItems val={val} />) : [];
  }                  
  catch{}
            
  return (
    <div style={{maxWidth:"80%"}} className="mx-auto">
      
      {cartItems}
          </div>
  );
}
export default Cart;