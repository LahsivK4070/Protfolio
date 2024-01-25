import "./hero.scss";
import { mirrorEasing, motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        }
    },
    scrollBtn: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const imageVariants = {
    initial: {
        x: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,

        }

    }
}

const floater = {
    initial: {
        y: 0,
    },
    animate: {
        y: 50,
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"

        }
    }
}

const Hero = () => {
  return (
      <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>Hi, I am</motion.h2>
            <motion.h1 variants={textVariants}>Vishal Kumar</motion.h1>
            <motion.h2 variants={textVariants}>Web Developer and Competitive Programmer</motion.h2>
            <motion.div variants={textVariants} className="buttons">
                <button id="btn1"><a href="#Projects">See My Projects</a></button>
                <button id="btn2"><a href="#Contact">Get In Touch</a></button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollBtn" src="/scroll.png" alt="scroll" />
            </motion.div>
          </div>
        <motion.div variants={imageVariants} initial="initial" animate="animate" className="imageContainer">
            <motion.img variants={floater} initial="initial" animate="animate" src="/hero.png" alt="hero" />
        </motion.div>
    </div>
  );
};

export default Hero;
