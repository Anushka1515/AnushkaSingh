import Parallax from "../components/parallax/Parallax";
import Services from "../components/services/services";

function AboutPage() {
  return (
    <div className="about" >
      <Parallax type="services" />
      <Services />
    </div>
  );
};

export default AboutPage;
