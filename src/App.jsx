// https://company.cahlp.kr/
// https://www.yanolja.in/

import React from 'react'
import { Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound'

import './App.css'
import Main from './pages/Main'
import Header from './components/Header'
import UmiBrand from './pages/UmiBrand'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="UmiBrand" element={<UmiBrand />} />
      </Routes>
    </div>
  );
}

export default App
