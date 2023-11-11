// https://company.cahlp.kr/

import React from 'react'
import { Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound'

import Main from './pages/Main'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App
