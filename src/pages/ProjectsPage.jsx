import Parallax from "../components/parallax/Parallax";
import Portfolio from "../components/portfolio/Portfolio";

function ProjectsPage(){
    // useEffect(() => {
    //     // Scroll to the top on mount
    //     window.scrollTo({ top: 0, behavior: 'auto' });
    //   }, []);
  return (
    <div className="projects" >
      <Parallax type="portfolio" />
      <Portfolio />
    </div>
  );
};

export default ProjectsPage;

