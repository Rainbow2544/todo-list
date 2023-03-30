import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import TodoDetail from "./pages/TodoDetail";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/todo" element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path="/todo/:todoId" element={<TodoDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
