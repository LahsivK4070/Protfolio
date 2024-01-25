import "./ratings.scss";
import codechef from "/codechef.jpg";
import codeforces from "/codeforces.png";
import leetcode from "/leetcode.png";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const items = [
  {
    id: 1,
    title: "Codeforces",
    rating: "1541",
    icon: codeforces,
    url: "https://codeforces.com/profile/LahsivK4070",

  },
  {
    id: 2,
    title: "Leetcode",
    rating: "2037",
    icon: leetcode,
    url: "https://leetcode.com/vishalkumarcoold2/",
  },
  { 
    id: 3,
    title: "Codechef",
    rating: "1832",
    icon: codechef,
    url: "https://www.codechef.com/users/riser_03"
  }
]

const variants = {
  initial: {
    y: 300,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    }
  },
}

const cardVariants = {
  initial: {
    opacity: 0,
    x: -300,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    }
  }
}

const RatingCard = ({ item }) => {
  return (
    <Tilt glareEnable={true} glarePosition="top" glareBorderRadius="20px">
    <motion.div className="card">
      <p className="code">{"</>"}</p>
      <span className="cardTitle">{item.title}</span>
      <div className="cardSingle">
        <div className="ratingContainer">
          <span>Rating</span>
          <h2>{item.rating}</h2>
        </div>
        <div className="imageContainer">
          <img src={item.icon} alt={item.icon} />
        </div>
      </div>
      <a className="cardLink" href={item.url}><span>View My Profile</span></a>
      </motion.div>
      </Tilt>
  );
}

const Rating = () => {
  return (
    <div className='ratings'>
      <motion.div variants={variants} initial="initial" whileInView="animate" className="textContainer">
        <h1><motion.span whileHover={{color: "#801dee"}}>Coding Profiles.</motion.span></h1>
      </motion.div>

      <motion.div variants={cardVariants} initial="initial" whileInView="animate" className="cardContainer">
        {items.map((item) => {
          return (
            <RatingCard key={item.id} item={item} />
          );
        })}
      </motion.div>
    </div>
  )
}

export default Rating;
