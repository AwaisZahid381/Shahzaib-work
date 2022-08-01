import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/header/Navbar";
// import { Route, Router, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Others/Home";
import Business from "./components/Others/Business";
import Blog from "./components/Others/Blog";
import SellRent from "./components/Others/SellRent";
import About from "./components/Others/About";
import Contact from "./components/Others/Contact";
import Store from "./components/Others/Store";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/business' element={<Business/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/SellRent' element={<SellRent/>}/>
        <Route path='/Store' element={<Store/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
