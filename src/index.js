import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1. import bootstrap && BrowserRouter 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// 2. import class
import Nav from './Nav';
import Home from './screens/Home'
import Add from './screens/Add'
import Store from './screens/Store'
import AllProducts from './screens/AllProducts';
import Accessories from './screens/store-category/Accessories'
import Clothing from './screens/store-category/Clothing'
import Apparatus from './screens/store-category/Apparatus'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/store' element={<Store/>}>
          <Route path='/store/clothing' element={<Clothing/>}/>
          <Route path='/store/accessories' element={<Accessories/>}/>
          <Route path='/store/apparatus' element={<Apparatus/>}/>
      </Route>
      <Route path='/allproducts' element={<AllProducts/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

