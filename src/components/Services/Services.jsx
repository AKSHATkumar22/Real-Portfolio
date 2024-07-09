import "./services.scss";
import { animate, motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   animate="animate"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I help in creating unique projects <br /> solving the real world -
          Problems
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b style={{ color: "orange" }}>Unique</b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b style={{ color: "orange" }}>For Your Reference</b>Models.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Development</h2>
          <p>
            Finds the bugs, Fixes the bugs and with help of innovative creation.
            I also devlope the product within the given time frame and completes
            the projects.
          </p>
          <button>Connect</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Content-Writing</h2>
          <p>
            Finds the bugs, Fixes the bugs and with help of innovative creation.
            I also manages the social media handles and writes the good short of
            description and lines about the blogs.
          </p>
          <button>Connect</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Problem Solving</h2>
          <p>
            Solves the problem of real world and also finds the solution of the
            user or the customer with the help of my team, where we develop,
            connect, reach and finds the paths.
          </p>
          <button>Connect</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
