import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [nameStatus, setNameStatus] = useState('');
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState('');
  const [password, setPassword] = useState('');
  const [passwordStatus, setPasswordStatus] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    const enteredName = e.target.value;
    const nameLength = enteredName.length;

    if (nameLength < 3) {
      setNameStatus('Name is too short (less than 3 characters)');
    } else if (nameLength >= 3 && nameLength < 6) {
      setNameStatus('Name strength: Moderate');
    } else {
      setNameStatus('Name strength: Good');
    }
  };

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(enteredEmail)) {
      setEmailStatus('Please enter a valid email address');
    } else {
      setEmailStatus('');
    }
  };

  const handlePasswordChange = (e) => {
    const enteredPassword = e.target.value;

    if (enteredPassword.length < 6) {
      setPasswordStatus('Password should be at least 6 characters');
    } else {
      setPasswordStatus('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate name, email, and password before making the API call
    const nameLength = name.length;
    const nameStrength = nameLength >= 6 ? 'Good' : 'Moderate';

    if (nameLength < 3) {
      setNameStatus('Name is too short (less than 3 characters)');
    } else {
      setNameStatus(`Name strength: ${nameStrength}`);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);

    if (!isEmailValid) {
      setEmailStatus('Please enter a valid email address');
    } else {
      setEmailStatus('');
    }

    const isPasswordValid = password.length >= 6;

    if (!isPasswordValid) {
      setPasswordStatus('Password should be at least 6 characters');
    } else {
      setPasswordStatus('');
    }

    // If name, email, and password are valid, proceed with the API call
    if (nameLength >= 3 && isEmailValid && isPasswordValid) {
      axios.post('https://crud-deployment1-backend-mern.onrender.com/register', { name, email, password })
        .then(result => {
          console.log(result);
          navigate('/login');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div  className='bg-secondary ' style={{height:"110vh", backgroundImage: `url(${process.env.PUBLIC_URL}/lglibbb.jpg)`, backgroundSize: 'cover',}}>
      <div style={{maxWidth:"500px"}}  className=' px-3 pb-3 rounded mx-auto  pt-5'>
        <div style={{marginTop:"100px"}} className='bg-white p-3'>       
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'>
              <strong>Name</strong>
            </label>
            <input
              type='text' placeholder='Enter name' autoComplete='off' name='name' className='form-control rounded-0'
              onChange={(e) => {
                setName(e.target.value);
                handleNameChange(e);
              }}
              value={name}
            />
            {nameStatus && <p className='text-info'>{nameStatus}</p>}
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='email' placeholder='Enter email' autoComplete='off' name='email' className='form-control rounded-0'
              onChange={(e) => {
                setEmail(e.target.value);
                handleEmailChange(e);
              }}
              value={email}
            />
            {emailStatus && <p className='text-danger'>{emailStatus}</p>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input
              type='password' placeholder='Enter password' autoComplete='off' name='password' className='form-control rounded-0'
              onChange={(e) => {
                setPassword(e.target.value);
                handlePasswordChange(e);
              }}
              value={password}
            />
            {passwordStatus && <p className='text-danger'>{passwordStatus}</p>}
          </div>
          <button type='submit' className='btn btn-dark w-100 rounded-0'>Register</button>
          <p>Already Have an Account</p>
          <Link to='/login' className="btn btn-dark w-100 rounded-0">Login</Link>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
