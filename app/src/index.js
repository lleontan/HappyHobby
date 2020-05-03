import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from 'firebase/app';
import 'firebase/auth'; 
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyBtVXJYLK67DVww7hwH3LnHitoac81ZQB8",
  authDomain: "happyhobby-9aec1.firebaseapp.com",
  databaseURL: "https://happyhobby-9aec1.firebaseio.com",
  projectId: "happyhobby-9aec1",
  storageBucket: "happyhobby-9aec1.appspot.com",
  messagingSenderId: "190544476420",
  appId: "1:190544476420:web:c05c773eed4e7c84963851",
  measurementId: "G-5BWGV500YR"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
