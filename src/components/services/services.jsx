// import { useRef } from "react";
// import "./services.scss";
// import { motion, useInView } from "framer-motion";

// const variants = {
//   initial: {
//     x: -500,
//     y: 100,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const Services = () => {
//   const ref = useRef();

//   const isInView = useInView(ref, { margin: "-100px" });

//   return (
//     <motion.div
//       className="services"
//       variants={variants}
//       initial="initial"
//     //   transition={opacity:0}
//       // animate="animate"
//       // whileInView="animate"
//       ref={ref}
//       animate={"animate"}
//     >
//       <motion.div className="textContainer" variants={variants}>
//         <p>
//         Turning logic into impact,
//           <br />  one line at a time
//         </p>
//         <hr />
//       </motion.div>
//       <motion.div className="titleContainer" variants={variants}>
//         <div className="title">
//           <img src="/people.webp" alt="" />
//           <h1>
//             <motion.b whileHover={{color:"orange"}}>Milestones </motion.b>That
//           </h1>
//         </div>
//         <div className="title">
//           <h1>
//             <motion.b whileHover={{color:"orange"}}>Define My</motion.b>Journey.
//           </h1>
//           <button>Skills in Action</button>
//         </div>
//       </motion.div>
//       <motion.div className="listContainer" variants={variants}>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Google Women Engineers Scholar</h2>
//           <p>
//             Selected as one of the 200 girls for Google Women Engineers Program by TalentSprint
//             supported by Google, from a pool of 30,000+ applicants accross India, with a scholarship of Rs.100000.
//           </p>
          
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Global Best M Gov Award</h2>
//           <p>
//           Won the Bronze Award at the Global Best M-Gov Awards, World Governments Summit 2025, Dubai,
//           among 3,500+ submissions from 74 countries.
//           </p>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>AWS AI ML Scholarship</h2>
//           <p>
//           Selected among top 1000 recipients achieving a sub-2 minute lap time in AWS DeepRacer League
// • Currently pursuing the AI Programming Nanodegree, fully funded by a $2,000 AWS scholarship
//           </p>
          
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Leetcode Contest Rankings</h2>
//           <p>
//           Achieved a peak LeetCode rating of 1670, securing a global rank of 1494 in a Weekly Contest among thousands  programmers
//           Demonstrated strong problem-solving skills in algorithms and data structures.
//           </p>
          
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Services;

import "./services.scss"
import {animate, motion, useInView} from "framer-motion"

const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0,

    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
}

const Services = () =>{
    return (
        <motion.div className="services" variants={variants} 
        initial="initial" 
        // animate="animate"
        whileInView="animate"
        >
            <motion.div className="textContainer">
                <p>
                Turning logic into impact,
                    <br/>one line at a time
                </p>
                <hr/>
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt=""/>
                    <h1>
                    <span className="hoverWord">Steps</span> that
                    </h1>
                </div>
                <div className="title">
                    <h1>
                    <span className="hoverWord">Shaped</span> me
                    </h1>
                    <button>Skills in action</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box"
  whileHover={{ backgroundColor: "lightgray", color: "black" }}>

                    <h2>Google Women Engineers Scholar</h2>
                    <p>
                    Selected as one of the 200 girls for Google Women Engineers Program by TalentSprint
                    supported by Google, from a pool of 30,000+ applicants accross India, with a scholarship of Rs.100000.
                    </p>
                    {/* <button>go</button> */}
                </motion.div>
                <motion.div className="box">
                    <h2>Global Best M Gov Award</h2>
                    <p>
                    Won the Bronze Award at the Global Best M-Gov Awards, World Governments Summit 2025, Dubai,
                    among 3,500+ submissions from 74 countries.
                    </p>
                    {/* <button>go</button> */}
                </motion.div>
                <motion.div className="box">
                    <h2>AWS AI ML Scholarship</h2>
                    <p>
                    Selected among top 1000 recipients achieving a sub-2 minute lap time in AWS DeepRacer League
                    Currently pursuing the AI Programming Nanodegree, fully funded by a $2,000 AWS scholarship
                    </p>
                    {/* <button>go</button> */}
                </motion.div>
                <motion.div className="box">
                    <h2>Leetcode Contest Rankings</h2>
                    <p>
                    Achieved a peak LeetCode rating of 1670, securing a global rank of 1494 in a Weekly Contest among thousands  programmers
                    Demonstrated strong problem-solving skills in algorithms and data structures.</p>
                    {/* <button>go</button> */}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services;