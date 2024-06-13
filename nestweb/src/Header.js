import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import logo from "../src/logo-nest.png"

function Header(){
    return(
        <BrowserRouter>
        <div className="main">
            <span> <img src={logo} alt="" /> </span> 
        <div className="ankr">
            <Link id="Link" to="/"> Home </Link>
            <Link id="Link" to="/about" > About </Link>
            <Link id="Link" to="/about"> Account </Link>
        </div>
        </div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
        </Routes>
        </BrowserRouter>
        
    )
}

export default Header;