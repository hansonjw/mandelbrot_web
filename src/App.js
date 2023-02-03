import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import './App.scss';


// Components
import Home from './pages/Home'
import NavBar from './pages/NavBar'
import ImgList from './pages/ImgList'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ImgList />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
