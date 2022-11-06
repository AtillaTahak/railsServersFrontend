import React from 'react';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePage from './pages/SinglePage/SinglePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:email" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
