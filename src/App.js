import { LandingIDE } from "./components/LandingIDE";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element={<Home/>} />
            <Route path="/onlinecompiler" element={<LandingIDE />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
