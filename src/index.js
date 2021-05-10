import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';

//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTJMMhow_7mIkmPQICd4Zfp4DzD19XngM",
  authDomain: "expanded-bonbon-309410.firebaseapp.com",
  projectId: "expanded-bonbon-309410",
  storageBucket: "expanded-bonbon-309410.appspot.com",
  messagingSenderId: "353003297911",
  appId: "1:353003297911:web:9a9e3c2d1423af81e63a72",
  measurementId: "G-23PP781KYN"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
