import { motion } from "framer-motion";

import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {

  return (
      <div className="navbar">
          <Sidebar />
          <div className="wrapper">
              <motion.span
                  initial={{ opacity: 0, scale: 3 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{duration: 0.5, delay:0.5}}
              >Vishal</motion.span>
              <div className="social">
                  <motion.a initial={{opacity: 0, scale: 3}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5, delay: 0.5}} href="https://www.linkedin.com/in/vishal-kumar-304464206/" target="blank"><motion.img whileHover={{scale: 1.2}} src="/linkedin.png" alt="linkedin" /></motion.a>
                  <motion.a initial={{opacity: 0, scale: 3}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5, delay:0.8}} href="https://twitter.com/Kuma52139Vishal" target="blank"><motion.img whileHover={{scale: 1.2}} src="/twitter.png" alt="twitter" /></motion.a>
                  <motion.a initial={{opacity: 0, scale: 3}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5, delay:0.8}} href="https://www.instagram.com/vishal_k_4070/" target="blank"><motion.img whileHover={{scale: 1.2}} src="/instagram.png" alt="instagram" /></motion.a>
              </div>
          </div>
    </div>
  )
}

export default Navbar
