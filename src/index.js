import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// echo "# crud-deployment-frontend-mern" >> README.md
//   git init
//   git add README.md
//   git commit -m "first commit"
//   git branch -M main
//   git remote add origin https://github.com/Tanmayee12345/crud-deployment-frontend-mern.git
//   git push -u origin main
