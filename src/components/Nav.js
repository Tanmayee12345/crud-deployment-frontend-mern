import {Link} from "react-router-dom";

function Nav(props)
{
    return(
        


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
            <Link to="/" className="nav-link text-dark">
              Home
            </Link>
            </li>
              <li className="nav-item">
              <Link to="/create-student" class="nav-link text-dark">Enter new book</Link>
              </li>
              <li className="nav-item">
              <Link to="/student-list" class="nav-link text-dark">BookList  </Link>
              </li>
              <li className="nav-item">
            <Link to="/review-get" className=" nav-link text-dark">
              Reviews
            </Link>
            </li>
              <li className="nav-item">
              <Link to={'/login'} className="nav-link text-dark">Log Out</Link>
              </li>
             
            
            </ul>
          </div>
        {/* </div> */}
      </nav>
    )
}
export default Nav;
