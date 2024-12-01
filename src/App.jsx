import React from "react";
import Signup from "./component/signup"
import Home from "./home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./component/login";
import Men from "./men";
 import Content from "./component/video";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/men" element={<Men />} />
        <Route path="/video" element={<Content />} />
      </Routes>

    </>
  )
}
export default App