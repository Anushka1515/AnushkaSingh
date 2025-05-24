import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
// import Parallax from "../components/parallax/Parallax";

function HomePage(){
  return (
    <div className="home">
      <Navbar />
      <Hero />
      {/* <Parallax type="portfolio" /> */}
    </div>
  );
};

export default HomePage;
