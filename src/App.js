//import logo from './logo.svg';
import React,{useEffect, useState} from 'react';
import axios from 'axios'
import './css/props.css';
import './css/App.css';
import Header from './screens/header';
import Sidebar from './screens/sidebar';
import HomePage from './screens/home';
import AllTestsPage from './screens/allTests';
import CategoriesPage from './screens/categories';
import LevelsPage from './screens/levels';
import TestCard from './screens/testCard';

import{
Route,
NavLink,
Routes
}from'react-router-dom';



function App() {
  return (
    <div className="App flex">
       <Sidebar />
       <div className='app-content'>
      <Routes>
      <Route exact path="/" element={<HomePage/>} />  
      <Route exact path="/all-tests" element={<AllTestsPage/>} /> 
      <Route exact path="/categories" element={<CategoriesPage/>} /> 
      <Route exact path="/levels" element={<LevelsPage/>} /> 
      <Route exact path="/testCard" element={<TestCard/>} /> 
      </Routes>
      </div>
    </div>
  );
}

export default App;
