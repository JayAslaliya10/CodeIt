import React from 'react'
import { LandingIDE } from "./components/LandingIDE";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import WebIndex from "./components/WebIndex";
import { Contest } from "./components/Contest";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element={<Home/>} />
            <Route path="/onlinecompiler" element={<LandingIDE />} />
            <Route path="/webcompiler" element={<WebIndex/>} />
            <Route path="/contestpage" element={<Contest/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;