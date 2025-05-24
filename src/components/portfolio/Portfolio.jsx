import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Myntra Location based Outfit Recommendation",
    img: "/myntra.jpeg",
    desc: "Developed a location-based fashion recommendation model using Random Forest achieving 92% accuracy. Designed an end-to-end system with a React frontend and a Flask backend, integrating API calls via Axios. Our solution ranked among the top 1200 out of 29,000 submissions in Myntra’s WeForShe hackathon.",
    link:"https://github.com/Anushka1515/Myntra_WeForShe"
  },
  {
    id: 2,
    title: "StyleOn",
    img: "style.jpeg",
    desc: "Developed a recommendation website where users receive suitable bottom wear suggestions for their tops.Utilized React to create the frontend in javascript and the backend in Python using Flask.",
    link:"https://gitlab.com/geekgirls/styleon/-/tree/completedproject?ref_type=heads"
  },
  {
    id: 3,
    title: "Image Classifier",
    img: "/flowers.jpg",
    desc: "UsedPyTorch to classify 102 types of flowers based on image data.Converted the model into a command-line application, enabling real-time predictions on new flower images. Managed large-scale datasets and optimized computational efficiency for training Deep learning models.",
    link: "https://github.com/Anushka1515/image_classifier"
  },
  {
    id: 4,
    title: "Bakery Website",
    img: "honey_dough.png",
    desc: "Developed a fully responsive bakery website using React.js featuring an intuitive UI, dynamic product listing, and smooth navigation to enhance user experience and showcase bakery offerings effectively.",
    link: "https://github.com/Anushka1515/Honey_dough"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start","start end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" 
          style={{y}}
          >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => window.open(item.link, "_blank")}>
  See Code
</button>
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
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;