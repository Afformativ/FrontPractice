//import logo from './logo.svg';
import React,{useEffect, useState} from 'react';
import './css/props.css';
import './css/App.scss';
import Sidebar from './screens/sidebar';
import HomePage from './screens/home';
import AllTestsPage from './screens/Tests/allTests';
import CategoriesPage from './screens/Categories/categories';
import LevelsPage from './screens/Levels/levels';
import TestCard from './screens/Tests/testCard';

import{
Route,
NavLink,
Routes
}from'react-router-dom';
import TestByLvl from './screens/Levels/TestByLvl';
import TestByCat from './screens/Categories/TestByCat';




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
      <Route exact path="/testByLvl" element={<TestByLvl/>} /> 
      <Route exact path="/testByCat" element={<TestByCat/>} /> 
      </Routes>
      </div>
    </div>
  );
}

export default App;
