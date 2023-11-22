import React from 'react';
import { Link } from 'react-router-dom';

function Footer({ scrollToSection }) {
  return (
    <div style={{ backgroundColor:'#5bc0de' }}>
      <div>
        <footer className="pt-4 text-white" style={{ padding: "0px" }}>
          <div className="container-fluid">
            <div className="row py-3">
              <div className="col-lg-3 col-12 " >
              <img
                  src="/icon.png"
                  alt="Footer Image"
                  style={{ width: '150px', height: '150px' }}
                />
              
              </div>

              <div className="col-lg-3 col-md-4 ">
                <h3 className="pb-lg-3 light-300">Designers</h3>
                <ul className="list-unstyled light-300">
                  <li className="pb-2">
                    <Link to="/" className="text-decoration-none">
                      Takkasila Lahari
                    </Link>
                  </li>
                  <li className="pb-2">
                    <Link to="/" className="text-decoration-none">
                      Muvala Sai Sruthi
                    </Link>
                  </li>
                  <li className="pb-2">
                    <Link to="/" className="text-decoration-none">
                      Gudluri Saranya
                    </Link>
                  </li>
                  <li className="pb-2">
                    <Link to="/" className="text-decoration-none">
                      Paduchuru Tanmayee
                    </Link>
                  </li>
                  <li className="pb-2">
                    <Link to="/" className="text-decoration-none">
                      Akireddy Nithin
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-2 my-sm-0 mt-4">
                <h3 className="pb-lg-3">For Public</h3>
                <ul className="list-unstyled">
                  <li className="pb-2">
                    <a href="https://www.google.com" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                      Terms of use
                    </a>
                  </li>
                  <li className="pb-2">
                    <a href="https://www.google.com" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="pb-2">
                    <a href="mailto:escrolls@gmail.com" className="text-decoration-none">Contact Us</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
                <h3 className="pb-lg-3 light-300">Quick Links</h3>
                <ul className="list-unstyled light-300">
                  <li className="pb-2">
                    <Link className="text-decoration-none text-primary" to="/library-box" exact>About us</Link></li>
                  <li className="pb-2"><Link className="text-decoration-none text-primary" to="/faqs" exact>FAQs</Link></li>

                  <li className="pb-2">
                    <Link className="text-decoration-none text-primary " to="/login" exact>Login</Link>
                  </li>
                  <li className="pb-2">
                    <Link className="text-decoration-none text-primary " to="/create-review" exact>Review</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

       
          <div className='text-center pb-3'>
          &copy; Copyright 2023
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;