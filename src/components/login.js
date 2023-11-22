import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordStatus, setPasswordStatus] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
    setError(''); // Reset error state

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (passwordStatus) {
      setError('Incorrect email or password');
      return;
    }

    axios.post('https://crud-deployment1-backend-mern.onrender.com/login', { email, password })
      .then(result => {
        if (result.data[0] === 'success') {
          props.getId([result.data[1], result.data[2], result.data[3]]);
          if (result.data[3] === 1 || result.data[3] === 2) {
            navigate('/');
          }
        } else {
          // Handle unsuccessful login
          setError('Incorrect email or password');
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    props.getId(['', '', false]);
  }, []);

  return (
    <div  className='bg-secondary  ' style={{  height:"110vh",backgroundImage: `url(${process.env.PUBLIC_URL}/lglibbb.jpg)`, backgroundSize: 'cover',}}>
      <div style={{maxWidth:"500px"}}  className=' px-3 pb-3 rounded mx-auto  pt-5'>
        <div style={{marginTop:"140px"}} className='bg-white p-3'>
        <h2 className=''>Login</h2>

        <form onSubmit={handleSubmit} className=''>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='email' placeholder='Enter email' autoComplete='off' name='email' className='form-control rounded-0'
              onChange={(e) => setEmail(e.target.value)}
            />
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
            />
            {passwordStatus && <p className='text-danger'>{passwordStatus}</p>}
          </div>
          {error && <p className='text-danger'>{error}</p>}
          <button type='submit' className='btn btn-dark w-100 rounded-0'>Login</button>
          <p>Don't have an account?</p>
          <Link to='/signup' className='btn btn-dark w-100 rounded-0'>Sign up</Link>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
