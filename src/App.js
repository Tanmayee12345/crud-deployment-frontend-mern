// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState,useEffect } from "react";
import Signup from './components/signup';
import Login from './components/login';
import { HashRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import Nav from './components/Nav';
import EnterBook from './components/CreateStudent';
import BookList from './components/StudentList';
import Nav1 from './components/Nav1';
import Bookslist from './components/studentList1';
import Cart from './components/cart';
import Home from './components/home';
import Categery from './components/categeries';
import DisplayBooks from './components/DisplayBooks';
import CreateStudent1 from './components/CreateStudent1';
import Reviewsget from './components/reviewsget';
import Footer from './components/footer';


import Nav2 from './components/Nav2'
function App(props) {

  const [id,setId]=useState("");
  const [name,setName]=useState("");
  const [access,setAccess]=useState(false);
  const [ver,setVer]=useState("")
  const getId=(childdata)=>{
    setId(childdata[0]);
    setName(childdata[1]);
    setAccess(childdata[2]);
    localStorage.setItem('id', JSON.stringify(childdata[0]));
    localStorage.setItem('name', JSON.stringify(childdata[1]));
    localStorage.setItem('access', JSON.stringify(childdata[2]));
  }
  useEffect(() => {
    try{
      const storedId = localStorage.getItem('id');
      const storedName=localStorage.getItem('name');
      const storedAccess=localStorage.getItem('access');
 
      if (storedId) {
        setId(JSON.parse(storedId));
      }
      if(storedName){
        setName(JSON.parse(storedName))
      }
      if(storedAccess){
        setAccess(JSON.parse(storedAccess))
      }
    }
    catch{
     
    }
  }, []);

   

  return (
    <div>

    <HashRouter>
      {access===1?(<><Nav  id={id} name={name}/></>):
      (<>
      {access===2?(<><Nav1 id={id} name={name}/></>):
      (null)}</>)}
      {!access?(<><Nav2 /></>):(null)}
      
      {console.log(access)}
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login getId={getId} />} />
        <Route path='/Nav' element={<Nav />} />
        <Route path='/Nav1' element={<Nav1 id={id} name={name} />} />
        <Route path='/nav2' element={<Nav2 />} />
        <Route path="/create-student" element={<EnterBook />} />
       <Route path='/student-list' element={<BookList />}></Route>
        <Route path="/student-list1" element={<Bookslist  id={id}/>} />
        <Route path='/' element={<Home />} />
        <Route
          path="/cart"
          element={<Cart id={id} />}
        />
        <Route
          path="/categeries"
          element={<Categery id={id} />}
        />
        <Route path='/displaybooks/:data' element={<DisplayBooks id={id} />}></Route>
        <Route path='/create-review' element={<CreateStudent1/>}/>
        <Route path='/review-get' element={<Reviewsget/>}/>
        <Route path='/footer' element={<Footer/>}/>
        

      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;