import Home from "./pages/home";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App=()=>{

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          </Routes>
      </Router>
     
      
    </>
  )
}

export default App
