import Parallax from "../components/parallax/Parallax.jsx";
import Services from "../components/services/services.jsx";

function AboutPage() {
  return (
    <div className="about" >
      <Parallax type="services" />
      <Services />
    </div>
  );
};

export default AboutPage;
