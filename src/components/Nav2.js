import { Link } from "react-router-dom";
import { useEffect } from 'react';
import Mypage from './y.jpg';

function Nav2(props) {
  

  return (
   


    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      {/* <div className="container-fluid"> */}
        <Link to="/" className="navbar-brand px-5 text-dark">
          {props.name}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto text-center">
            <li className="nav-item">
            <Link to="/signup" className="nav-link text-dark">Sign Up</Link>
            </li>
            <li className="nav-item">
            <Link to="/login" className="nav-link text-dark">Login</Link>
            </li>
           
           
           
            
          </ul>
        </div>
      {/* </div> */}
    </nav>
  );
}

export default Nav2;














