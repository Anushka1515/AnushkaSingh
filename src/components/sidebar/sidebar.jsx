import React, { useState } from "react";
import {motion} from "framer-motion"
import Links from "./links/links";
import "./Sidebar.scss"
import ToggleButton from "./toggleButton/ToggleButton";
const Sidebar = () => {

    const [open, setOpen] = useState(false)

    const variants = {
        open :{
            clipPath: "circle(1220px at 50px 50px)",
            transition: {
                delay:0.5,
                type:"spring",
                stiffness:400,
                damping: 100,

            }
        },
        closed: {
            clipPath: "circle(20px at 40px 45px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 50
            }

        }
    }

    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links open={open}/>
            </motion.div>
            <ToggleButton open={open} setOpen={setOpen}/>
        </motion.div>
        
    )
}

export default Sidebar;