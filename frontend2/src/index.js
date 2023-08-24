// import React from 'react';
// import ReactDOM from 'react-dom';  // Corrected import


// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//     <App />

// );

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

import App from './App'; // Import your main App component
import { Provider } from 'react-redux';
import { store } from './Redux/store';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
  </BrowserRouter>
  
);


