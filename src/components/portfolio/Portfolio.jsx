import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Tomato-Clone",
    img: "/Tomato.png",
    desc: "Developed a Zomato clone where I have just created a clone of Zomato where customers can order food by sitting inside their house and can add food in the add-to-cart items. This i have created with the help of React js libraries.",
  },
  {
    id: 2,
    title: "Real-Estate",
    img: "/RealEstate.png",
    desc: "Developed a RealEstate clone where I have just created a clone of state where customers can bookflats and many more by sitting inside their house. This i have created with the help of React js libraries.",
  },
  {
    id: 3,
    title: "Chat Application",
    img: "/RT-chat.png",
    desc: "Developed a Chat Application where I have just created an app where customers can chat and many more from anywhere, anytime. This i have created with the help of React js libraries.",
  },
  {
    id: 3,
    title: "Google-Gemini Clone",
    img: "/Clone.png",
    desc: "Developed a Google Gemini Clone where I have just created an app where customers can chat and many more from anywhere, anytime. Where, they can find any answers by typing any prompt. This i have created with the help of React js libraries.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Code</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
