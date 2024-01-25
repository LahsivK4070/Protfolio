import "./education.scss";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const variants = {
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
    },
  },
};

const Education = () => {
  return (
    <motion.div className="education">
      <motion.div
        variants={variants}
        initial="initial"
        // whileInView="animate"
        className="titleContainer"
        animate="animate"
      >
        <motion.h1 variants={variants} className="title">
          <motion.b whileHover={{ color: "#804dee" }}>My Academic</motion.b>{" "}
          Journey.
        </motion.h1>
      </motion.div>
      <motion.div
        variants={variants}
        initial="initial"
        // whileInView="animate"
              className="listContainer"
              animate="animate"
      >
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.1}>
          <motion.div variants={variants} className="list" whileHover>
            <h2 className="orange-text-gradient">
              B.Tech in Computer Science and Engineering
            </h2>
            <h1>Harcourt Butler Technical University, Kanpur</h1>
            <div className="info">
              <p className="blue-text-gradient">December 2020 - Present</p>
              <p className="blue-text-gradient">CGPA: 8.78/10</p>
            </div>
          </motion.div>
        </Tilt>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.1}>
          <motion.div variants={variants} className="list">
            <h2 className="orange-text-gradient">Intermediate</h2>
            <h1>Ganaga International School, New Delhi</h1>
            <div className="info">
              <p className="blue-text-gradient">April 2018 - March 2019</p>
              <p className="blue-text-gradient">Percentage: 95.33%</p>
            </div>
          </motion.div>
        </Tilt>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.1}>
          <motion.div variants={variants} className="list">
            <h2 className="orange-text-gradient">High School</h2>
            <h1>St. Mary's Convent School, Gajraula</h1>
            <div className="info">
              <p className="blue-text-gradient">April 2016 - March 2017</p>
              <p className="blue-text-gradient">CGPA: 10/10</p>
            </div>
          </motion.div>
        </Tilt>
      </motion.div>
    </motion.div>
  );
};

export default Education;
