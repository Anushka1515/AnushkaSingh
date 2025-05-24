// import {motion} from "framer-motion"
// import { useState } from "react"
// const Test = () => {
//     const [open, setOpen] = useState(false)
    
//     const variants = {
//         visible : {opacity: 1, 
//             x:100, 
//             transition:{staggerChildren : 0.2}
//         },
//         hidden : {opacity:0}
//     }

//     const items = [
//         "item1","item2","item3","item4"
//     ];
    
//     return (
//         <div className="course">
//             <motion.ul initial="hidden" animate="visible" variants={variants}> 
//                 {items.map(item=>(
//                     <motion.li key={item}>{item}</motion.li>
//                 ))}
//             </motion.ul>

            
//         </div>
//     );
// };

// export default Test;

import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {
  const [open, setOpen] = useState(false);

  // Parent variant for ul
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      x: 100,
      transition: {
        staggerChildren: 0.3, // Delay between child animations
      },
    },
  };

  // Child variant for li
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const items = ["item1", "item2", "item3", "item4"];

  return (
    <div className="course">
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={listVariants}
      >
        {items.map((item) => (
          <motion.li key={item} variants={itemVariants}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
