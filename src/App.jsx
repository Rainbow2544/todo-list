import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
