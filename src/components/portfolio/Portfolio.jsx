import "./portfolio.scss";
import vtubeImg from "/videoProject.png";
import blogImg from "/blogProject.png";
import ccImg from "/countryProject.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
    {
        id: 1,
        title: "VTube",
        img: vtubeImg,
        desc: "The application is a MERN stack-based video sharing platform with Firebase storage. It supports user authentication via Firebase or email, allows subscriptions to other users, and organizes subscribed videos in a separate section. Videos are sorted by views and recommended based on tags. Users can like, dislike, comment on, and share videos for enhanced interaction.",
        live_link: "https://video-sharing.onrender.com/",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "node",
                color: "pink-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "firebase",
                color: "orange-text-gradient",
            }
        ]
    },
    {
        id: 2,
        title: "Blogging App",
        img: blogImg,
        desc: "The project is a responsive MERN stack blogging website, featuring authentication, and providing users the ability to write and view blogs. Users can authenticate using  email and password, update their account details, and filter blogs based on authors or tags. Authenticated users can perform CRUD operations, to write, update, or delete their own articles, fostering a dynamic and interactive blogging environment.",
        live_link: "https://drive.google.com/file/d/1sGStxOm6XrpMjBeEF9zUByzhSjMpIWCL/view?usp=sharing",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "node",
                color: "pink-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "orange-text-gradient",
            }
        ],
    },
    {
        id: 3,
        title: "Counting Country",
        img: ccImg,
        desc: "The project is a responsive application built with React.js that leverages APIs to display information about various countries. It features a search functionality that allows users to find countries using their official names and offers a filter to sort countries based on their continental region. The application also provides a link to the country's location on Google Maps, enhancing the user's experience and understanding.",
        live_link: "https://rest-country-two.vercel.app/",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "api",
                color: "orange-text-gradient",
            }
        ]
    },
];

const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-700, 700]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <motion.button whileHover={{ scale: 1.2 }}><a href={item.live_link} target="blank">Project Link</a></motion.button>
                        <div className="tagContainer">
                        {item.tags.map((tag) => {
                            return (
                                <span className={tag.color} key={tag.name}>#{tag.name}</span>
                            );
                        })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    console.log(scrollYProgress)

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>My Technical Endeavors.</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
          {items.map((item) => (
            <Single item={item} key={item.key} />
        ))}
    </div>
  )
}

export default Portfolio
