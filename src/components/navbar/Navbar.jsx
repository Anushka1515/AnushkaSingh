// import React from 'react'
import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"
import {motion} from "framer-motion"

const Navbar = () => {
    return (
        <div className="navbar">
            {/*sidebar*/}
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                initial={{opacity:0, scale:0.5}} 
                animate={{opacity:1, scale:1}} 
                transition={{duration:0.5}} 
                className="name">Anushka Singh</motion.span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/anushka-singh-aa2695293/"><img src="/linkedin.jpg" alt="" /></a>
                    <a href="https://leetcode.com/u/Anushka1515/"><img src="/leetcode.webp" alt="" /></a>
                    <a href="https://github.com/Anushka1515"><img src="/github.png" alt="" /></a>
                    <a href="mailto:anushkasinghas1512@gmail.com"><img src="/mail1.png" alt="Email" /></a>
                </div>
            </div>
        </div>
    )
}
export default Navbar;